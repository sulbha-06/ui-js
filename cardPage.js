const numberColorCombination = [
  { key: 1, color: "#6F98A8" },
  { key: 2, color: "#2B8EAD" },
  { key: 3, color: "#2F454E" },
  { key: 4, color: "#2B8EAD" },
  { key: 5, color: "#2F454E" },
  { key: 6, color: "#BFBFBF" },
  { key: 7, color: "#BFBFBF" },
  { key: 8, color: "#6F98A8" },
  { key: 9, color: "#2F454E" },
];
const map = new Map();
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const onShuffel = () => {
  numArray.sort((a, b) => 0.5 - Math.random());
  let myID = 1;

  numArray.forEach((num) => {
    let result = numberColorCombination.find(
      (numColor) => numColor.key === num
    );
    document.getElementById(myID).firstChild.innerHTML = result.key;
    document.getElementById(myID).style.background = result.color;
    myID++;
  });
};
const onSort = () => {
  numberColorCombination.forEach((num) => {
    document.getElementById(String(num.key)).firstChild.innerHTML = num.key;
    document.getElementById(String(num.key)).style.background = num.color;
  });
  console.log("sort the number");
};
