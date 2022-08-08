//selectors
const selectElement = (s)=> document.querySelector(s)
//event listeners & functions
//open on click of the hamburger icon
selectElement('.menu-icons-open').addEventListener('click',()=>{
    selectElement('.nav-list').classList.add('active')
})
//close on click of the hamburger close icon
selectElement('.menu-icons-close').addEventListener('click',()=>{
    selectElement('.nav-list').classList.remove('active')
})