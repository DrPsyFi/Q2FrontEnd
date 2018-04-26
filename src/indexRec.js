const baseURL = 'http://localhost:3000'


axios.get(//`${baseURL}/recipe`)
  //.then(result => {
    let newDiv = document.createElement("div");
    let currentDiv = document.getElementById("recipesContainer");

    for(let i = 0; i < result.data.length; i++) {
      let cardColContainter = document.createElement('div')
      let myRecipe = getRecipe(result.data[i])

      cardColContainter.classList.add('col-md-4')
      cardColContainter.append(myRecipe)
      currentDiv.appendChild(cardColContainter)
    }
})

function getRecipe(myRecipe){

  //////recipeBox//////////////////////////////
  const recipeBox =  document.createElement('div')
  recipeBox.classList.add('card')

  ////pictureBox and image////////////////
  const pictureBox = document.createElement('div')
  pictureBox.classList.add('card-img-top')
  const picImage = document.createElement('img')
  picImage.classList.add('thumbnail')
  picImage.setAttribute('src', myRecipe.picture)
  recipeBox.appendChild(picImage)

  //////////nameBox///////////////////////////////
  const nameBox = document.createElement('div')
  nameBox.classList.add('card-body')
  nameBox.innerHTML = myRecipe.name
  recipeBox.appendChild(nameBox)

  /////////////// Event Listener ////////////
  picImage.addEventListener('click', () => {

    window.location = "viewRecipe.html?id=" + myRecipe.id
    })
  return recipeBox
}


/////////////////// Create New Recipe Button /////////////
let button = document.querySelector('#createButton')
//   // button.addEventListener('click', function(e) {
//   // window.location = "createRecipe.html"
// })
