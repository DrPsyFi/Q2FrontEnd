


    document.querySelector("#newRecipe").addEventListener('submit', function(event){
      event.preventDefault()
      console.log("hello")
      const recipeName = event.target.recipeName.value
      const recipeInstructions = event.target.recipeInstructions.value
      const recipeIngredients = event.target.recipeIngredients.value
      const recipePicture = event.target.recipePic.value

      console.log(recipeName, recipeIngredients, recipeInstructions, recipePicture)

      request('/auth/token')
      .then((response)=>{
        return response(`/users/${response.data.id}/recipes`, 'post', { recipeName , recipeInstructions, recipeIngredients, recipePicture})
      })

  })
  //     .then(function(res){
  //
  //     res.status(200)
  //       window.location = 'userHomePage.html'
  //     })
  //     .catch(function(error){
  //
  //       alert("You must fill in the blanks to create a recipe. If you changed your mind navigate back to your home page in the navigation bar")
  //     })
  // })
