const numberColorCombination = [
    {key:1,color:'#6F98A8'},
    {key:2,color:'#2B8EAD'},
    {key:3,color:'#2F454E'},
    {key:4,color:'#2B8EAD'},
    {key:5,color:'#2F454E'},
    {key:6,color:'#BFBFBF'},
    {key:7,color:'#BFBFBF'},
    {key:8,color:'#6F98A8'},
    {key:9,color:'#2F454E'}
]
const map = new Map();

const onShuffel = () =>{
    let shuffledNumbers = [6,8,1,9,3,4,2,5,7];
    console.log("shuffel is clicked--->");
    let myID = 1;
    shuffledNumbers.forEach(num => {
       let result =  numberColorCombination.find(numColor=>numColor.key === num);
       console.log("found the object---->",result);
        document.getElementById(String(myID)).firstChild.innerHTML = num ;
        document.getElementById(String(myID)).style.background = result.color;
        myID++;
    });
}
const onSort = ()=>{
        numberColorCombination.forEach((num)=>{
             document.getElementById(String(num.key)).firstChild.innerHTML = num.key;
            document.getElementById(String(num.key)).style.background = num.color;
        })
    console.log("sort the number");
}