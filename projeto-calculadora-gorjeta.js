const conta = document.querySelector('.conta')

const porcentagemgorjeta = document.querySelectorAll('.button')

const pessoas = document.querySelector('.people');

const gorjetafinal = document.querySelector('.finaltip')

const finalprice = document.querySelector('.finalprice')

const inputs = document.querySelectorAll('.inputs')

const retirada = document.querySelector('.retirada')

const entrega = document.querySelector('.entrega')

const consumo = document.querySelector('.consumo')

const taxaEntrega = 0.15;

const buttons = document.querySelectorAll('.button')

const buttoncustom = document.querySelector('.buttoncustom');

let taxa = 0;

function updateValue() {

    if(conta.value > 0 && pessoas.value >= 1) {
        finalprice.value = ((conta.value * taxa) + conta.value / pessoas.value).toFixed(2)
        gorjetafinal.value = ((conta.value * taxa) / pessoas.value).toFixed(2)
    } else {
        alert('Error')
    }
}


function unchecked() {
    buttons.forEach(function(button) {
        button.checked = false
    })
}

retirada.addEventListener('change', function() {
    if(retirada.checked == true) {
        finalprice.value = conta.value
    
        console.log('retirada')
    }
})


entrega.addEventListener('change', function() {
    if(entrega.checked == true) {
        finalprice.value = (conta.value + conta.value * taxaEntrega)
    
        console.log('entrega')
    }
})

consumo.addEventListener('change', function() {
    if(consumo.checked == true) {
        inputs.forEach(function(input) {
            input.addEventListener('change', function() {
                updateValue()
            })
        })
        
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
            buttoncustom.addEventListener('change', function() {
                taxa = buttoncustom.value / 100
        
                updateValue()
        
                unchecked()
        
            })
    }
})


