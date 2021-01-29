document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")
  const taskList = document.getElementById("tasks")
  const deleteButton = document.getElementById("deleteButton")

  // add event listener to form
  form.addEventListener("submit", handleSubmit)
  function handleSubmit(event) {
    // prevent default POST action
    event.preventDefault()

    // grab task in input field
    let taskDescription = document.getElementById("new-task-description").value

    // add task to task list
    taskList.innerHTML += `<li>${taskDescription}<button id="deleteButton">X</button></li>`

    // reset form to show placeholder
    form.reset()
  }
  
});

// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   document.querySelectorAll("input")[1].addEventListener("click", function(event){
//     event.preventDefault()
//     let button = document.createElement('button')
//     button.innerHTML = 'X'
//     button.addEventListener("click", (e)=>{
//       e.target.parentElement.remove();
//     });
//     let parent =document.querySelector('ul')
//     let task = document.createElement('li')
//     task.innerHTML = document.querySelectorAll("input")[0].value
//     task.append(button)
//     parent.append(task)
//   });
// });