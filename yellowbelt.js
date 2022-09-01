function hidedonate(element){
    element.remove();
}
var numlikes = [3, 5, 8];
var spans = [
    document.querySelector("#likes-1"),
    document.querySelector("#likes-2"),
    document.querySelector("#likes-3")
];

function like(id) {
    numlikes[id]++;
    spans[id].innerHTML = numlikes[id] + "like(s)";
}
function message(value) {
    alert('You are looking for ' + value);
}

