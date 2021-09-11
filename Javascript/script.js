//Simple counter program

// let count = 0;
// let counter = () => {
//   count += 1;
//   document.getElementById("counter").innerHTML = count;
//   console.log(count);
// };

// let substract = () => {
//   count -= 1;
//   document.getElementById("counter").innerHTML = count;
//   console.log(count);
// };

// let reset = () => {
//   count = 0;
//   document.getElementById("counter").innerHTML = count;
//   console.log(count);
// };

// let parNew = document.getElementById("xx");
// parNew.innerText = "Hi";
// parNew.style.backgroundColor = "black";

// const body = document.querySelector("body");
// const darkMode = document.getElementById("dark");
// const lightMode = document.getElementById("light");

// let dark = () =>{
    //    body.className = "light" cara ngasih class ke body di html
    //    body.classList.add("light") cara ngasih class ke body di html
//     body.style.backgroundColor = "black";
//     body.style.color = "white";
//     darkMode.style.display = "none";
//     lightMode.style.display = "block";
// }

// let light = () =>{
//     body.style.backgroundColor = "white";
//     body.style.color = "black";
//     darkMode.style.display = "block";
//     lightMode.style.display = "none";
// }

var arr = [1,2,3,4,5];

//iterate pake map

arr.map((value, index)=>{
    console.log(value, index)
});