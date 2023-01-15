let word = prompt("Teg kiriting! >>> ")
let word1 = prompt("Matn kiriting! >>> ")

let demo = document.getElementById('demo');



let addAppend = () =>{
    
    let teg = document.createElement(word);
    teg.innerHTML = word1;
    demo.append(teg)
}

let addPrepend = () =>{
    
    let teg = document.createElement(word);
    teg.innerHTML = word1;
    demo.prepend(teg)
}

let addBefore = () =>{
    
    let teg = document.createElement(word);
    teg.innerHTML = word1;
    demo.before(teg)
}

let addAfter = () =>{
    
    let teg = document.createElement(word);
    teg.innerHTML = word1;
    demo.after(teg)
}
