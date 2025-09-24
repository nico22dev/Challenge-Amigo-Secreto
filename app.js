let amigos = [];

function agregarAmigo() {
    const nombre = document.getElementById("amigo").value;
    if (nombre === "" || nombre === " "){
        alert("Por favor, inserte un nombre.")
        return;
    }
    amigos.push(nombre);
    actualizarLista();
    document.getElementById("amigo").value = "";
}

function actualizarLista(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++){
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
}