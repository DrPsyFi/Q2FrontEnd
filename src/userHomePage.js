

  request("/auth/token")
    .then(function (res) {
      return request(`/users/${res.data.id}/recipes`)
    })
    .then(function (res) {

      for(let i= 0; i < res.data.data.length; i++) {
        let pic = res.data.data[i].picture
        let name = res.data.data[i].recName

        let card = document.createElement("div")
        card.classList.add("cardBox")

        let recipePicture = document.createElement("img")
          recipePicture.classList.add("card-img-top")
          recipePicture.setAttribute("src", pic)

        let title= document.createElement("p")
          title.innerText = name

        let viewButton = document.createElement("button")
        let buttonText = document.createTextNode("View Recipe")
          viewButton.classList.add("btn-dark")
          viewButton.appendChild(buttonText)
          console.log("params",res.data.data[i].id )
          viewButton.addEventListener('click', function() {

            window.location = "viewRecipe.html?id="+res.data.data[i].id



            })

        card.appendChild(recipePicture)
        card.appendChild(title)
        card.appendChild(viewButton)


        let cardBox = document.querySelector(".card-parent")
          cardBox.classList.add('center')
          cardBox.appendChild(card)
        }
    })

let createButton = document.querySelector("#create")

  createButton.addEventListener("click", function() {

    window.location = "createRecipe.html"
  })
