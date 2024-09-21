import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";
import { verificarListaComprados} from "./verificarListaComprados.js";
const listaComprados = document.getElementById("lita-comprados");
const listadeCompras = document.getElementById("lista-de-compras");

let contador = 0;

export function criarItemDaLista(item) {
    const itemDalista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");

    const containerNomeDoItem = document.createElement("div");
    containerChecbox.classList.add("containerChecbox");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("input-checkbox");
    checkboxInput.id = "checkbox-" + contador++

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener("click", function (evento) {
        const checkboxInput = evento.currentTarget.querySelector(".input-checkbox");
        const checkboxCustomizado = evento.currentTarget.querySelector("checkbox-customizado");
        const itemTitulo = evento.currentTarget.closet("li").querySelector("#item-titulo")
        if (checkboxInput.cheked) {
            checkboxCustomizado.classList.add("cheked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDalista)
        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listadeCompras.appendChild(itemDalista)
        }
    })

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerChecbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerChecbox);

    const nomeDoItem = document.createElement("p");
    nomeDoItem.id ="item-titulo";
    nomeDoItem.innerText = item;
    containerNomeDoItem.appendChild(nomeDoItem)

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("item-lista-container");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";

    botaoRemover.addEventListener("click", function() {
        excluirItem(itemDalista);
    })

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    const botaoEditar = document.createElement("buttao");
    botaoEditar.classList.add("item-lista-button")

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";

    botaoEditar.addEventListener("cick", function () {
        editarItem(itemDalista);
    })

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(containerBotoes);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);

    const itemData = document.createElement("p");
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric"})}`;
    itemData.classList.add("texto-data");

    itemDalista.appendChild(containerItemLista);
    itemDalista.appendChild(itemData);

    return itemDalista;
}