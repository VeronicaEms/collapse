export default function variant () {    
    init();
    //variável para url anterior
    let oldURL = "";
    //variável para url que estou agora
    let currentURL = window.location.href;
    console.log(currentURL)

    //se url que estou agora for diferente da url anterior
        if (currentURL != oldURL) { 

            //verifica se existe o carrinho, se existir, adiciona a classe collapse-cro para FECHAR o carrinho
            if(document.querySelectorAll('.checkout-content .carrinho-desktop app-carrinho .cart header').length > 0) {
                console.log("PRIMEIRO IF ADDCLASS")
            $(document.querySelector(".carrinho-desktop app-carrinho section.cart")).addClass("collapse-cro");  
            }

            //verifica se na url de nome checkout existir e se existe a terceira aba "pagamento" com a classe active:
            //REMOVE a classe collapse-cro tornando o carrinho ABERTO
            if(window.location.pathname.indexOf("checkout") > 0 && $('.tabs div').eq(3).hasClass('active')){
                console.log("ENTRA NO IF TABS E REMOVE A CLASSE")
                $(document.querySelector('.carrinho-desktop app-carrinho section.cart')).removeClass("collapse-cro");
            }           

        oldURL = currentURL;

        oldURL = window.location.href;

            setTimeout(function() {
                this.window.location.href;
            }, 1000);  
        }                

        //insere setinha do carrinho
        document.querySelector(".checkout-content .carrinho-desktop app-carrinho .cart header").insertAdjacentHTML("beforeend",'<div class="cro-icon"> </div>');    
}



function init() {

    checkoutHidden({
        cartCheckout: '.checkout-content .carrinho-desktop app-carrinho .cart',
        header: document.querySelector('.checkout-content .carrinho-desktop app-carrinho .cart header')
    });
}

//quando houver um click no body, ele irá chamar a função que verifica a terceira aba(pagamento) e remove a classe.
$('body').click(function() {
    variant()
    $(document.querySelector('.carrinho-desktop app-carrinho section.cart')).removeClass("collapse-cro");
    
    
    
});
