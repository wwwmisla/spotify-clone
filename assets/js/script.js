// Dizer Bom dia, boa tarde ou boa noite, conforme a hora atual.
const hora = new Date().getHours();
const greetingElement = document.getElementById("greeting");

let horarioAtual;

if (hora >= 0 && hora < 12) {
    horarioAtual = "Bom dia!";
} else if (hora >= 12 && hora < 18) {
    horarioAtual = "Boa tarde!";
} else {
    horarioAtual = "Boa noite!";
}

greetingElement.textContent = horarioAtual;

// Inserir o ano atual no copy
copy.innerHTML += new Date().getFullYear();