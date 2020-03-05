import checkoutHidden from '../components/checkoutHidden';
//import Services from '../configs/services/Services';

export default function variant () {    
    init();

    //let oldURL = "";
    let currentURL = window.location.href;
    console.log(currentURL)

        //if (currentURL != oldURL) {
            
        if (currentURL > 0) {

            return new MutationObserver(mutations => {         

            document.querySelectorAll('.checkout-content .carrinho-desktop app-carrinho .cart header').length > 0,
              console.log("PRIMEIRO IF ADDCLASS")
            $(document.querySelector(".carrinho-desktop app-carrinho section.cart")).addClass("collapse-cro");  

            document.querySelectorAll('#wrap app-checkout #pageName .row .col-md-12 app-pagamento').length > 0,
             console.log("SEGUNDO IF REMOVECLASS")
            $(document.querySelector('.carrinho-desktop app-carrinho section.cart')).removeClass("collapse-cro");   

            //oldURL = currentURL;

            //oldURL = window.location.href;

                // setTimeout(function() {
                //     this.window.location.href;
                // }, 1000);
            

            }).observe(document, {
                childList: true,
                subtree: true,
                attributes: true
            })
        }

        document.querySelector(".checkout-content .carrinho-desktop app-carrinho .cart header").insertAdjacentHTML("beforeend",'<div class="cro-icon"> </div>')          
    
}



function init() {

    checkoutHidden({
        cartCheckout: '.checkout-content .carrinho-desktop app-carrinho .cart',
        header: document.querySelector('.checkout-content .carrinho-desktop app-carrinho .cart header')
    });
}



// if ($(document).on("click", '#dados-pessoais-next', function (e) { 

//     $(document.querySelector(".carrinho-desktop app-carrinho section.cart")).addClass("collapse-cro");

// }));

// if ($(document).on("click", "button[data-gtm-event-label='avancar-para-pagamento']", function (e) { 

//     $(document.querySelector(".carrinho-desktop app-carrinho section.cart")).removeClass("collapse-cro");

// }));
