let word = prompt("Teg kiriting! >>> ")
let word1 = prompt("Icon kiriting! >>> ")

let demo = document.getElementById('demo');
let demo2 = document.getElementById('demo2');



let addAppend = () =>{
       
    let teg = document.createElement(word);
    teg.className = word1;   
    demo2.append(teg);
}

