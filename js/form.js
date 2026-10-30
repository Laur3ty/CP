// Capturar dados do formulário
const btn = document.querySelector('#submitbtn')

btn.addEventListener("click", function(event) {
    event.preventDefault()

    const nome = document.querySelector('#name').value
    const email = document.querySelector("#email").value
    const assunto = document.querySelector("#assunto").value
    const mensagem = document.querySelector("#mensagem").value

    console.table([nome,email,assunto,mensagem])

    btn.innerHTML = "Mensagem enviada"
})