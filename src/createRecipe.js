
(function() {
  'use strict';

const baseURL = 'http://localhost:3000'

  request(`${baseURL}`)
  .then(function(response){
    // user is authenticated

  })
  .catch(function(error){
    // user is not authenticated
  })



axios.post(`${baseURL}/recipe/`)

})();
