function changePara(node) {

    const text = document.createElement("textarea");
    text.innerText = node.innerText;
    text.classList.add("edit-fieldtext");

    const btn = document.createElement("button");
    btn.addEventListener("click", () => savePara(node, text, btn));
    btn.innerText = "save";
    btn.classList.add("btn");

    //console.log(str);

    node.classList.toggle("hidden");

    node.parentNode.appendChild(text);
    node.parentNode.appendChild(btn);
}

function savePara(node, ...args) {
    //console.log(node);

    node.classList.toggle("hidden");
    node.innerText = args[0].value;

    for (let Node of args) {
        node.parentNode.removeChild(Node);
    }
}

function percentwidth(elem) {
    var pa = elem.offsetParent || elem;
    return ((elem.offsetWidth / pa.offsetWidth) * 100).toFixed(2);
}

function changeBar(node) {
    console.log("changing")
    const range = document.createElement("input");
    range.type = "range";

    const bar = node.querySelector(".progress-in");
    console.log(percentwidth(bar));
    range.value = percentwidth(bar);

    range.classList.add("edit-bar");

    const btn = document.createElement("button");
    btn.addEventListener("click", () => saveBar(node, range, btn));
    btn.innerText = "save";
    btn.classList.add("btn");

    node.classList.toggle("hidden");

    node.parentNode.appendChild(range);
    node.parentNode.appendChild(btn);

}

// the first args is the node with the info to resave, the rest are auxiliar
function saveBar(node, ...args) {
    node.classList.toggle("hidden");

    for (let Node of args) {
        node.parentNode.removeChild(Node);
    }

    node.querySelector(".progress-in").style.width = String(args[0].value) + "%";
    node.querySelector(".skill-percent").innerText = args[0].value;
}