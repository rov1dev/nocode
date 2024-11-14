let componets = document.querySelectorAll('#aside div')
let block = document.getElementById('document')

const createEelement = (what)=>{
    return document.createElement(what);
}
componets.forEach(item=>{
    item.addEventListener('click',()=>{
        block.appendChild(createEelement(item.getAttribute('data-value')));
        localStorage.setItem('html', JSON.stringify(block.innerHTML));
        console.log(JSON.parse(localStorage.getItem('html')));
        
    })
})
