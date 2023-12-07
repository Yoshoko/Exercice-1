let result = document.getElementById("result");
let btnConvers = document.getElementById("btnconvers");
let temp = document.getElementById("distance");

btnConvers.onclick = function () {
    let d = distance.value;

    let r = (d * 0.9144);
    console.log(r)
    result.innerHTML = r;
}