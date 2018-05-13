
const searchString = window.location.search.slice(1).split('&').map(ele => {
  const [key, value] = ele.split('=')
  console.log({ [key]: value } , "id value");
  return { [key]: value }
}).reduce((acc, ele) => ({...acc, ...ele }))


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
//////////////////////////////////////////////////////////////////////////////
//////                   View Notes                              /////////////
//////////////////////////////////////////////////////////////////////////////

request("/auth/token")
  .then(function (res) {
    return request(`/users/${res.data.id}/recipes/${searchString.id}/notes`)
  })
  .then(function (res) {
    let notes= res.data.data
    console.log(notes)
    let notesBox = document.querySelector("#notes")


    notes.map(note => {

      let noteEle = document.createElement("p")
      noteInfo = note.notes
      noteEle.innerHTML = noteInfo
      notesBox.appendChild(noteEle)
    })
  })

//////////////////////////////////////////////////////////////////////////////
////               Create Note                                           ////
//////////////////////////////////////////////////////////////////////////////
const noteParentDiv = document.querySelector("#buttonRow")
const noteButton = document.querySelector("#addNote")

  noteButton.addEventListener('click', () => {

  let noteForm= document.createElement("form")

  let noteEle = document.createElement("input")
      noteEle.setAttribute("name", "noteInput")

  let noteSubmit = document.createElement("button")
      noteSubmit.setAttribute("type", "submit")
      noteSubmit.classList.add("btn-danger")
      noteSubmit.classList.add("btn-sm")
      noteSubmit.innerHTML = "Create Note"

      noteForm.appendChild(noteEle)
      noteForm.appendChild(noteEle)
      noteForm.appendChild(noteSubmit)

      noteParentDiv.appendChild(noteForm)
      console.log("IN HERE MY MAN");

    noteForm.addEventListener('submit', (event) => {

        event.preventDefault(event)
        let noteInput = noteEle.value
        console.log({noteInput}, '1')

    request('/auth/token')

      .then((response)=>{
        return request(`/users/${response.data.id}/recipes/${searchString.id}/notes`, 'post' ,  `noteInput`  )
   })


   })
 })
