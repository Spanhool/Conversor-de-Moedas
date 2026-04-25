// Cotação de moeda
const USD = 4.77
const EUR = 5.32
const GBP = 6.08

// Obtendo os valores
const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")
const result = document.querySelector("#result")

// Manipulando o input amount para receber apenas numeros
amount.addEventListener("input", () => {
    const hasCaractersRegex = /\D+/g
    amount.value = amount.value.replace(hasCaractersRegex, "")
})

// Capturando o evento de submit (enviar) do formulario
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
        break

        case "EUR":
            convertCurrency(amount.value, EUR, "€")
        break

        case "GBP":
            convertCurrency(amount.value, GBP, "£")
        break
    }
}

// Função para converter a moeda
function convertCurrency (amount, price, symbol) {
    try {
        // Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${price} = ${formatCurrencyBRL(price)}`

        // Calcula o total
        let total = amount * price
        
        // Formatar o valor total
        total = formatCurrencyBRL(total).replace("R$", "")
    
        // Exibir o valor total
        result.textContent = `${total} Reais`

        // Aplica a classe que exibe o footer 
        footer.classList.add("show-result")

    } catch (error) {
        // Remove a classe do footer, removendo ele
        footer.classList.remove("show-result")

        console.log(error)
        alert("Nao foi possivel converter, Tente novamente")
    }
}

// Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value) {
    // Converte para numero para usar toLocaleString para formatar para o padrão BRL
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}