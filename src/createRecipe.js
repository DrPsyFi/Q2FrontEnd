


    document.querySelector("#newRecipe").addEventListener('submit', function(event){
      //event.preventDefault()
      console.log("hello")
      const recipeName = event.target.recipeName.value
      const recipeInstructions = event.target.recipeInstructions.value
      const recipeIngredients = event.target.recipeIngredients.value
      const recipePicture = event.target.recipePic.value

      console.log(recipeName, recipeIngredients, recipeInstructions, recipePicture)

      request('/userid/recipe', 'post', { recipeName , recipeInstructions, recipeIngredients, recipePicture})
        .then(function(res){

        res.status(200)
          //window.location = 'userHomePage.html'
        })
        .catch(function(error){
      })
  })
