const card1 = [1,8];
const card2 = [2,4];
const card3 = [3,5,9];
const card4 = [6,7];

const map = new Map();

const onShuffel = () =>{
    document.getElementById('1').firstChild.innerHTML = 2;
    document.getElementById('1').style.background = '#2B8EAD';
    console.log(document.getElementById('1').innerText);
    console.log("shuffel is clicked--->");
}
const onSort = ()=>{
    document.getElementById('1').firstChild.innerHTML = 1;
    document.getElementById('1').style.background = '#6F98A8';
    console.log("sort the number");
}