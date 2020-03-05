export default function variant () {    
    init();

    let oldURL = "";
    let currentURL = window.location.href;
    console.log(currentURL)
        //if(currentURL != oldURL) {

        if (currentURL != oldURL) {

            return new MutationObserver(mutations => {

            currentURL && document.querySelectorAll('.checkout-content .carrinho-desktop app-carrinho .cart header').length > 0,
              console.log("PRIMEIRO IF ADDCLASS")
            $(document.querySelector(".carrinho-desktop app-carrinho section.cart")).addClass("collapse-cro");  

            currentURL && document.querySelectorAll('#wrap app-checkout #pageName .row .col-md-12 app-pagamento').length > 0,
            console.log("SEGUNDO IF REMOVECLASS")
            $(document.querySelector('.carrinho-desktop app-carrinho section.cart')).removeClass("collapse-cro");   
            
            oldURL = currentURL;

            oldURL = window.location.href;

                setTimeout(function() {
                    this.window.location.href;
                }, 1000);

            }).observe(document, {
                childList: true,
                subtree: true
            })
        }

        document.querySelector(".checkout-content .carrinho-desktop app-carrinho .cart header").insertAdjacentHTML("beforeend",'<div class="cro-icon"> </div>')          
    
}
