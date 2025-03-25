var shopify = (function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

  function Refresh(productId) {

    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit(productId);
      } else {

        LoadScript();
      }
    } else {
      console.log(productId);
      LoadScript();
    }
  }

  function LoadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }


  function ShopifyBuyInit(productId) {
    var client = ShopifyBuy.buildClient({
      domain: 'mjeted-6q.myshopify.com',
      storefrontAccessToken: 'c01ecfa0d17b4a1a4bb44bc385b35732',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      console.log('load button for:',productId);
      ui.createComponent('product', {
        id: productId,
        node: document.getElementById('product-component-1741049410962'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px"
                }
              },
              "button": {
                "font-family": "PT Sans, sans-serif",
                "border-radius": "10px",
              }
            },
            "contents": {
              "img": false,
              "title": false,
              "price": false
            },
            "text": {
              "button": "Add to cart"
            },
            "googleFonts": [
              "PT Sans"
            ]
          },
          "productSet": {
            "styles": {
              "products": {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                }
              }
            }
          },
          "modalProduct": {
            "contents": {
              "img": false,
              "imgWithCarousel": true,
              "button": false,
              "buttonWithQuantity": true
            },
            "styles": {
              "product": {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px"
                }
              },
              "button": {
                "font-family": "PT Sans, sans-serif",
                "border-radius": "10px"
              }
            },
            "googleFonts": [
              "PT Sans"
            ],
            "text": {
              "button": "Add to cart"
            }
          },
          "option": {},
          "cart": {
            "styles": {
              "button": {
                "font-family": "PT Sans, sans-serif",
                "border-radius": "10px"
              }
            },
            "text": {
              "total": "Subtotal",
              "button": "Checkout"
            },
            "googleFonts": [
              "PT Sans"
            ]
          },
          "toggle": {
            "styles": {
              "toggle": {
                "font-family": "PT Sans, sans-serif"
              }
            },
            "googleFonts": [
              "PT Sans"
            ]
          }
        },
      });
    });
  }


  return {
    init: LoadScript,
    refresh: Refresh,
  };
})();


// Delay Load Shopify
if (!window.orbitShop) {
  setTimeout(() => {
    window.orbitShop = shopify;
    orbitShop.init();
  }, 2000);
  setTimeout(() => {
    window.orbitShop.refresh();
  }, 3000);
}





