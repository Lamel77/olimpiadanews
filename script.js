let section = document.querySelector("section")


function toDarkSide(){
    section.classList.add("dark")
    section.classList.remove("light")
}

function toLightSide(){
    section.classList.add("light")
    section.classList.remove("dark")
}
const clique = document.getElementById('clique')

clique.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})
