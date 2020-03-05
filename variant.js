export default function variant () {    
    init();

    let oldURL = "";
    let currentURL = window.location.href;
    console.log(currentURL)

        if (currentURL != oldURL) { 

            if(document.querySelectorAll('.checkout-content .carrinho-desktop app-carrinho .cart header').length > 0) {
                console.log("PRIMEIRO IF ADDCLASS")
            $(document.querySelector(".carrinho-desktop app-carrinho section.cart")).addClass("collapse-cro");  
            }

            if(window.location.pathname.indexOf("checkout") > 0 && $('.tabs div').eq(3).hasClass('active')){
                console.log("ENTRA NO IF TABS E REMOVE A CLASSE")
                $(document.querySelector('.carrinho-desktop app-carrinho section.cart')).removeClass("collapse-cro")
            }           

        oldURL = currentURL;

        oldURL = window.location.href;

            setTimeout(function() {
                this.window.location.href;
            }, 1000);  
        }                

        document.querySelector(".checkout-content .carrinho-desktop app-carrinho .cart header").insertAdjacentHTML("beforeend",'<div class="cro-icon"> </div>');    
}



function init() {

    checkoutHidden({
        cartCheckout: '.checkout-content .carrinho-desktop app-carrinho .cart',
        header: document.querySelector('.checkout-content .carrinho-desktop app-carrinho .cart header')
    });
}


$('body').click(function() {
    variant()
    $(document.querySelector('.carrinho-desktop app-carrinho section.cart')).removeClass("collapse-cro");
    
    
    
});
