const url = 'http://localhost:5500/api'

function getUsers() {
    fetch(url)
    // .then(response => console.log(response.json()))
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

// getUsers()

// O console.error vai trazer o erro para o console, apenas com o uso do fecth nesse caso
// Na response, adicionamos um ".json" para que a informação venha em formato json, podendo ser lida de qualquer forma.
// O JSON.stringify() é um método converte um valor JavaScript em uma string JSON, opcionalmente substituindo valores se uma função substituta for especificada ou opcionalmente incluindo apenas as propriedades especificadas se uma matriz substituta for especificada.


function getUser() {
    fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

getUser()
getUsers()

// Agora vamos fazer um "POST", isto é, quero passar dados para a API. Neste caso, vamos incluir um novo usuário.

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        // No method, pode receber "get" (que é o padrão, por isso não é necessário utilizar, caso seja get), pode ser POST também.
        body: JSON.stringify(newUser),
        // No body, colocamos o que será enviado para a url, isto é, o fetch vai pegar o que colocamos no body e enviar para dentro da url.
        // Utilizamos a função JSON.stringify para que transformasse o conteúdo em JSON, e não em um objeto, tendo em vista que o HTML não mostra algo em formato/estrutura de objeto.
        headers: {
            "Content-type": "application/json;charset=UTF-8"
            // O headers também é padrão, na verdade, essas 03 partes do código (method, body e headers) são conteúdos padrão.
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const newUser = {
    name: "Olivia Zars",
    avatar: "http://picsum.photos/200/300",
    city: 'Rio do Sul'
}

addUser(newUser)

