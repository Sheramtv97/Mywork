//
// const addinput = document.querySelector('.input')
// const number = document.querySelector('.input')
// const btnButton = document.querySelector('.btn')
// const list = document.querySelector('.list')
// const inp = document.querySelector('input')
// const text = document.querySelector('.hero-h1')
//
//
// document.querySelector('.btn')
//     .addEventListener('click',() =>{
//     text.innerHTML = inp.value.substring(0,1)
//     text.classList.toggle('color')
// })
//
// btnButton.addEventListener('click',()=>{
//     addNewWork()
// })
//
//
// addinput.addEventListener('keydown',(e)=>{
//     if (e.key === 'Enter'){
//         addNewWork()
//     }
// })
//
//
// function  addNewWork(){
//     if (addinput.value !== ""){
//         const newList = `<div class="list d-flex
//         justify-content-between align-items-center "><ul
//         class="d-flex align-items-center justify-content-between "><input type="checkbox"
//         class="checkbox mx-1">${addinput.value}${number.value}</ul><button
//         class="del-btn btn btn-primary">Delete</button></div>`
//         list.innerHTML += newList
//     }
//     list.innerHTML += ""
// }
//
//
// list.addEventListener('click',(e)=>{
//     if (e.target.classList.contains('del-btn')){
//         e.target.parentNode.remove()
//     }
//     if (e.target.classList.contains('checkbox')){
//         e.target.parentNode.classList.toggle('line')
//     }
// })
//
//
// const input = document.querySelector('.text-input')
// const btn = document.querySelector('.add-btn')
// const list= document.querySelector('.list')
//
//
//
// btn.addEventListener('click',()=>{
//     addNewWork()
// })
// input.addEventListener('keydown',(e)=>{
//     if (e.key === 'Enter'){
//         addNewWork()
//     }
// })
//
//
// function  addNewWork(){
//     if (input.value !==""){
//         const newList = `<div class="list-group-item d-flex
//         justify-content-between align-items-center"><span
//         class="d-flex align-items-center"><input type="checkbox"
//         class="checkbox mx-1">${input.value}</span><button
//         class="del-btn btn btn-primary">delete</button></div>`
//         list.innerHTML+= newList
//     }
//     list.innerHTML += ""
// }
// list.addEventListener('click',(e)=>{
//     if (e.target.classList.contains('del-btn')){
//         e.target.parentNode.remove()
//     }
//     if (e.target.classList.contains('checkbox')){
//         e.target.parentNode.classList.toggle('line')
//     }
// })
//
//
// const inp = document.querySelector('input')
// const text = document.querySelector('h1')
//
//
// document.querySelector('.btn')
//     .addEventListener('click',() =>{
//         text.innerHTML = inp.value.substring(0,1)
//         text.classList.toggle('koroche')
//     })
const input = document.querySelector('.text-input')
const input2 = document.querySelector('.num-input')
const btn = document.querySelector('.add-btn')
const list = document.querySelector('.list')



function saved(){
    const info = JSON.parse(localStorage.getItem('information')) || []
    let contacts = ""

    info.map(el => {
        contacts += `<li class="list-group-item d-flex justify-content-between align-items-center border-primary">
        <input type="checkbox">
        <div class="px-3 py-2 border rounded-circle mx-2 text-bg-dark">${el.title.slice(0,1).toUpperCase()}</div>  
        <span class="d-flex align-items-center"><b>${el.title}</b></span>  <span class="m-2">${el.number}</span> 
        <button class="del-btn btn btn-danger">Delete</button></li>`})

    list.innerHTML = contacts
    allInfo()

}
saved()



btn.addEventListener("click", () => {

    let info = JSON.parse(localStorage.getItem('information')) || []
    const newInfo = {
        title: input.value,
        number: input2.value,
    }
    if(input.value.length !== 0 && input2.value.length !== 0){
        info = [...info, newInfo ]
    }else{
        input.classList.toggle('list-group-item-danger')
        input2.classList.toggle('list-group-item-danger')
    }
    localStorage.setItem('information', JSON.stringify(info))
    input.value = ""
    input2.value = ""
    saved()

})





function allInfo(){
    const buttons = document.querySelectorAll('.del-btn')
    let info = JSON.parse(localStorage.getItem('information')) || []
    buttons.forEach((btn,index) =>{
        btn.addEventListener('click', () => {
            info = info.filter((el, idx) =>{
                return index !== idx
            })
            localStorage.setItem('information', JSON.stringify(info))
            saved()
        })
    })
}