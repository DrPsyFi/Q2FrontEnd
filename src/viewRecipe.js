const baseURL = 'http://localhost:3000'



function getThisRecipe(myRecipe) {
  let id = window.location.search.slice(4)
  let title = document.querySelector("#createHead")
  let recPic = document.querySelector('#recipePic')
  let ingredList = document.querySelector('#ingredients')
  let directions = document.querySelector('#instructions')

  axios.get(`${baseURL}/recipes/` + id )
    .then(result => {
    let myRecipe = result.data
    title.innerText = myRecipe.name
    recPic.setAttribute('src', result.data.picture)
    ingredList.innerText = "Ingredients are a coming soon feature"
    directions.innerText = myRecipe.instructions
  })
}



getThisRecipe()
