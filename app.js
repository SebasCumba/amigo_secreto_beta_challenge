
let friend = [];

console.log(friend);

function addFriend() {
    let inputFriend = document.getElementById('amigo');
    let nameFriend = inputFriend.value;

    console.log(nameFriend);

    if (!nameFriend) {
        alert('Debes ingresar un nombre');
        return;
    }
    friend.push(nameFriend);
    inputFriend.value = '';
    inputFriend.focus();
    showFriends();
}

function showFriends() {
    let listFriends = document.getElementById('listaAmigos');
    listFriends.innerHTML = '';

    for(let i = 0; i < friend.length; i++) {
        let item = document.createElement("li");
        item.textContent = friend[i];
        listFriends.appendChild(item);
    }
}

function sortFriends() {
    if (friend.length === 0) {
        alert('No hay amigos para ordenar');
        return;
    }
    let drawFriend = friend[Math.floor(Math.random() * friend.length)];
    let result = document.getElementById('resultado');
    result.innerHTML = `El amigo sorteado es: ${drawFriend}`;

    let cleanInput = document.getElementById('listaAmigos');
    cleanInput.innerHTML = '';
}

