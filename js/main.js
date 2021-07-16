const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let data = {
        nome,
        email,
        telefone,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('content')

    let carregando = `<img src='../asserts/loader.gif'>`

    let pronto = `<h2>Obrigado !!!</h2>`

    content.innerHTML = carregando;

    setTimeout(() => {
        content.innerHTML = pronto
    }, 2000)

    setTimeout(() => {
        location.reload();
    }, 4000)
})