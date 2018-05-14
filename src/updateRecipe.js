
const searchString = window.location.search.slice(1).split('&').map(ele => {
  const [key, value] = ele.split('=')
  console.log({ [key]: value } , "id value");
  return { [key]: value }
  }).reduce((acc, ele) => ({...acc, ...ele }))

////////////////// get request for recipe information /////////////////////

request("/auth/token")
  .then(function (res) {
    return request(`/users/${res.data.id}/recipes/${searchString.id}`)
  })
  .then(function (res) {

    let data= res.data
    let title = document.querySelector("#createHead")
    let recPic = document.querySelector('#recipePic')
    let ingredList = document.querySelector('#ingredients')
    let directions = document.querySelector('#instructions')
    title.innerHTML = data.data.recName
    recPic.setAttribute('src', data.data.picture)
    ingredList.innerHTML = data.data.ingredients
    directions.innerHTML = data.data.instructions
  })

///////////////   Put Request to update recipe /////////////////////////////////

document.querySelector("#saveUpdate").addEventListener('submit', function(event){

  event.preventDefault()

  let recipeIngredients = document.querySelector('#ingredients').innerHTML
  let recipeInstructions = document.querySelector('#instructions').innerHTML

  request('/auth/token')
  .then((response)=>{
    return request(`/users/${response.data.id}/recipes/${searchString.id}`, 'put', { ingredients: recipeIngredients, instructions: recipeInstructions,})
  })
  .then(function(response){
    alert("Sucessful Update")
    window.location = 'userHomePage.html'

    })
  .catch(function(error){
    alert("You must fill in the blanks to create a recipe. If you changed your mind navigate back to your home page in the navigation bar")
  })
})


////////////////////////// Delete Resource ///////////////////////////////////

document.querySelector("#delete").addEventListener('click', function() {

  request('/auth/token')
    .then((response)=>{
      return request(`/users/${response.data.id}/recipes/${searchString.id}`, 'delete')
    })
    .then(function(response){
      alert("Sucessful Delete")
      window.location = 'userHomePage.html'
    })
  .catch(function(error){
     alert("You must fill in the blanks to create a recipe. If you changed your mind navigate back to your home page in the navigation bar")
   })
 })
