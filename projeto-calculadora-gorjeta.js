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

const buttonDivs = document.querySelectorAll('.buttoncontainer')

let taxa = 0;


function updateValue() {

    if(conta.value >= 0 && pessoas.value >= 1) {
        finalprice.value = ((conta.value * taxa) + conta.value / pessoas.value).toFixed(2)
        gorjetafinal.value = ((conta.value * taxa) / pessoas.value).toFixed(2)
        
    } else if (pessoas.value < 1) {
        alert('Número de Pessoas Inválido')
    } else if (conta.value <= 0) {
        alert(`R$ ${conta.value} não é um valor aceito `)
    } else {
        alert('Preencha Valor e número de pessoas')
    }
}


function unchecked() {
    buttons.forEach(function(button) {
        button.checked = false
    })
    buttonDivs.forEach(function(btn) {
        btn.classList.remove('active')
    })
}

retirada.addEventListener('change', function() {
    if(retirada.checked) {
        finalprice.value = conta.value
    
        console.log('retirada')
    }
})


entrega.addEventListener('change', function() {
    if(entrega.checked) {
        finalprice.value = (conta.value + conta.value * taxaEntrega)
    
        console.log('entrega')
    }
})


const generalInputs = document.querySelectorAll('.general')

consumo.addEventListener('change', function() {
    if(consumo.checked) {
        console.log('consumo')


        generalInputs.forEach(function(generalInput) {
            generalInput.removeAttribute("disabled");
        })

        inputs.forEach(function(input) {
            input.addEventListener('change', function() {
                updateValue()
                // Testar função a seguir
                // Number(conta.value).toFixed(2)
            })
        })
        
        
        buttonDivs.forEach(function(buttonDiv) {
            buttonDiv.addEventListener('click', function() {
                //Verificar se há outros inputs marcados
                var checkedInputs = document.querySelectorAll('.active input');
                checkedInputs.forEach(function(checkedInput) {
                    checkedInput.checked = false;
                })
                
                //Remover as classes active de todos botões
                buttonDivs.forEach(function(btn) {
                    btn.classList.remove('active')
                })

                //Adicionar a classe active ao botão clicado
                buttonDiv.classList.toggle('active')

                //Marcar o input correspondente
                var input = buttonDiv.querySelector('input');
                if(input) {
                    input.checked = true;
                    input.dispatchEvent(new Event('change'));
                }
                
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

const reset = document.querySelector('.reset');

reset.addEventListener('click', function() {
    conta.value = '0';

    unchecked()
    
    updateValue()
})


