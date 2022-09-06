function changeToEdit(node) {

    const text = document.createElement("textarea");
    text.innerText = node.innerText;
    text.classList.add("edit-fieldtext");

    const btn = document.createElement("button");
    btn.addEventListener("click", () => save(node, btn, text));
    btn.innerText = "save";
    btn.classList.add("btn");

    //console.log(str);

    node.classList.toggle("hidden");

    node.parentNode.appendChild(text);
    node.parentNode.appendChild(btn);
}

function save(node, btn, text) {
    console.log(node);

    node.classList.toggle("hidden");
    node.innerText = text.value;

    node.parentNode.removeChild(btn);
    node.parentNode.removeChild(text);
}