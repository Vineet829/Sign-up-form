const element = document.querySelector(".ola")
const random = document.querySelector(".form_data")
nameRan = ola['name']

const students = [
    {name: "fffdd"}
]


addName = (name) => {
    students.push(
        name
     )
return {name}
}

createName = ({name}) => {
    const n = document.createElement("p")
    n.innerText = name
    random.appendChild(n)
}

students.forEach(createName)

ola.onsubmit = (e) =>{
e.preventDefault();

const newText = addName(
    nameRan.value
)
createName(newText)
}