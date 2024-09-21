import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");

const listadeCompras = document.getElementById("lista-de-compras");

 export function adicionarItem(evento) {
    evento.preventDefault()
    
    if (item.value === "") {
        alert("Por favor insira um item!");
        return
    }

    const itemDalista = criarItemDaLista(item.value);
    listadeCompras;appendChild(itemDalista);
    verificarListaVazia(listadeCompras);
    item.value ="";
}