const conta = document.querySelector('.conta')

const porcentagemgorjeta = document.querySelectorAll('.button')

const pessoas = document.querySelector('.people');

const gorjetafinal = document.querySelector('.finaltip')

const finalprice = document.querySelector('.finalprice')

const inputs = document.querySelectorAll('.inputs')

const retirada = document.querySelector('.retirada')

const entrega = document.querySelector('.entrega')

const  consumo = document.querySelector('.consumo')

const taxaEntrega = 0.15;
 
function updateValue() {
    finalprice.value = ((conta.value * taxa) + conta.value / pessoas.value).toFixed(2)
    gorjetafinal.value = ((conta.value * taxa) / pessoas.value).toFixed(2)
}

inputs.forEach(function(input) {
    input.addEventListener('change', function() {
        updateValue()
    })
})

const buttons = document.querySelectorAll('.button')

let taxa = 0;

const buttoncustom = document.querySelector('.buttoncustom');

buttons.forEach(function(button) {
    
    
    button.addEventListener('change', function() {
        taxa = button.value;
        buttoncustom.value = ''
        updateValue()
        buttons.forEach(function(otherButton) {
            if(otherButton !== button) {
                otherButton.checked = false
            }
        })
    })
})

function unchecked() {
    buttons.forEach(function(button) {
        button.checked = false
    })
}

buttoncustom.addEventListener('change', function() {
    taxa = buttoncustom.value / 100

    updateValue()

    unchecked()

})

if(retirada.checked) {
    finalprice.value = conta.value
} else if(entrega.checked) {
    finalprice.value = conta.value * taxaEntrega
} else {
    
}

