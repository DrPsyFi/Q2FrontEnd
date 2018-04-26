
  // login form

  document.querySelector('#signIn').addEventListener('submit', function(event){
    event.preventDefault()

    const username = event.target.username.value
    const password = event.target.password.value
      console.log(username, password);
    request('/auth/token', 'post', { username , password })
  
    .then(function(response){
      document.querySelector('#error').classList.add('hide-auth-error')
      localStorage.setItem('token', response.data.token)
      window.location = 'userHomePage.html'
    })
    .catch(function(error){
      document.querySelector('#error').classList.remove('hide-auth-error')
    })
  })
