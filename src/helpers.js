function request(path, method = 'get', body = null) {
  let bearerToken = ''
  const token = localStorage.getItem('token')

  if(token){
    bearerToken = `Bearer ${token}`
  }

return axios(`https://frozen-mesa-66942.herokuapp.com${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': bearerToken
    },
    data: body
  })
}
//return axios(`https://frozen-mesa-66942.herokuapp.com${path}`, {
