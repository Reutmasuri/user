async function getProductsData(){

    const response = await fetch('https://dummyjson.com/users')
    const data = await response.json()
    console.log(data);

let container = document.getElementById("users")


data.users.map((users,index) => {
    let card=document.createElement("div")
card.className="card"
card.id=index
// card.className="users"
container.appendChild(card)

    let firstName = document.createElement("div")
    firstName.innerHTML=users.firstName
    firstName.className="firstName"
    card.appendChild(firstName)

    let lastName = document.createElement("div")
    lastName.innerHTML=users.lastName
    lastName.className="lastName"
    card.appendChild(lastName)

    let age = document.createElement("div")
    age.innerHTML=users.age
    age.className="age"
    card.appendChild(age)

    let city = document.createElement("div")
    city.innerHTML=users.address.city
    city.className="city"
    card.appendChild(city)

    let email = document.createElement("div")
    email.innerHTML=users.email
    email.className="email"
    card.appendChild(email)

    let item = document.createElement("img")
    item.src = users.image
    item.style.height = "200px"
    item.style.width = "180px"
    card.appendChild(item)

    let Search = document.getElementById("Search")
    Search.oninput = () => console.log(Search.value)

    Search.oninput = () => {
        data.users.map((user,index) =>{ if (user.firstName.toLowerCase().includes(Search.value)||user.lastName.toLowerCase().includes(Search.value)||user.age.toLowerCase().includes(Search.value)||user.address.toLowerCase().includes(Search.value)){
          document.getElementById(index).style.display=""
        }
        else{ 
         document.getElementById(index).style.display="none"
      
      }})}
})}

getProductsData()


