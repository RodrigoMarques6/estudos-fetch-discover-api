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
// O JSON.stringify()método converte um valor JavaScript em uma string JSON, opcionalmente substituindo valores se uma função substituta for especificada ou opcionalmente incluindo apenas as propriedades especificadas se uma matriz substituta for especificada.


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

