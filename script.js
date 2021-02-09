
function changePrice() {

const checkbox = document.getElementById('checkbox').checked;
const basic = document.getElementById('basicPrice');
const pro = document.getElementById('proPrice');
const master = document.getElementById('mastPrice');

var priceAnnual = document.getElementById('priceAnnual');
var priceMonthly = document.getElementById('priceMonthly');


if(!checkbox) {
basic.innerHTML = '$199.99'
pro.innerHTML = '$249.99'
master.innerHTML = '$399.99'
priceMonthly.style.color = "hsl(232, 13%, 33%)"
priceAnnual.style.color = "hsl(232, 13%, 33%)"

}

else {
basic.innerHTML = '$19.99'
pro.innerHTML = '$24.99'
master.innerHTML = '$39.99'
priceMonthly.style.color = "hsl(234, 14%, 74%)"
priceAnnual.style.color = "hsl(234, 14%, 74%)"


}

}
