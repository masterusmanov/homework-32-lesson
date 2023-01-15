let checkButton = () =>{
    let demo1 = document.querySelector('img')
    let demo0 = document.querySelector('h1')
    let demo2 = document.querySelector('p')

    if(demo1.classList.contains('demo1')){
        demo1.classList.remove('demo1');
    }else{
        demo1.classList.add('demo1')
    }
    
    if(demo2.classList.contains('demo2')){
        demo2.classList.remove('demo2');
    }else{
        demo2.classList.add('demo2')
    }

    if(demo0.classList.contains('demo0')){
        demo0.classList.remove('demo0');
    }else{
        demo0.classList.add('demo0');
    }
}