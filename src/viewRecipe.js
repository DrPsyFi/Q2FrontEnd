
const searchString = window.location.search.slice(1).split('&').map(ele => {
  const [key, value] = ele.split('=')
  return { [key]: value }
}).reduce((acc, ele) => ({...acc, ...ele }))




request("/auth/token")
  .then(function (res) {
    return request(`/users/${res.data.id}/recipes/${searchString.id}`)
  })
  .then(function (res) {
    let data= res.data
    console.log(data)
    let title = document.querySelector("#createHead")
    let recPic = document.querySelector('#recipePic')
    let ingredList = document.querySelector('#ingredients')
    let directions = document.querySelector('#instructions')

    title.innerText = data.data.recName
    recPic.setAttribute('src', data.data.picture)
    ingredList.innerText = data.data.ingredients
    directions.innerText = data.data.instructions
  })
