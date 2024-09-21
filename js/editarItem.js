
export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome do item:");


if (novoItem !== null && novoItem.trim() !=="") {
        const itemTextoAtualizado = elemento.querySelector("item-titulo");
        itemTextoAtualizado.textContent = novoItem;

        const estavaComprado = elemento.querySelector(".input.chekbox").checked;

        if (estavaComprado) {
            elemento.querySelector(".input-chekbox").checked = true;
            elemento.querySelector(".checkbox-customizado").classlist.add("checked");
            itemTextoAtualizado.style.textDecoration = "line-through";
        }
    }
}