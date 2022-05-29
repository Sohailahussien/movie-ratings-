let addMovie = document.getElementById('addMovie');
let model = document.getElementById('model');
let movieName = document.getElementById('movieName');
let imgUrl = document.getElementById('imgUrl');
let movieRate = document.getElementById('movieRate');
let addButton = document.getElementById('addButton');
let alltasks = document.getElementById('alltasks');
let oneTask = document.getElementById('oneTask');
let body = document.querySelector('body');
let addDataFunction = ()=>{

if(movieName.value.trim() == ""|| imgUrl.value.trim() == ""||movieRate.value.trim() == "" ||movieRate.value>5|| movieRate.value<1){
    alert("Please enter valid data")
}else{
alltasks.innerHTML +=  `<div  id="oneTask" class="card mb-3 taskView" >
<div class="row no-gutters" id="taskView">
  <div class="col-md-5">
    <img  src="${imgUrl.value}" alt="...">
  </div>
  <div class="col-md-5">
    <div class="card-body">
      <h5 class="card-title">${movieName.value}</h5>
      <p id="rateView" class="card-text "> ${movieRate.value} / 5 stars</p>
    </div>
  </div>
 <div class="col-md-2 deletediv" >
<button  class="   btn deleteButton   "> Remove</button>
 </div>
</div>
</div>`
movieName.value = ""
imgUrl.value = ""
movieRate.value = ""
modelApper();
}


}




let deleteTask = (e ) =>{
    if(e.target.classList.contains('deletediv')){
e.target.parentElement.remove()
    }
}

// Model appeear
let modelApper = ()=>{
    model.classList.toggle('block');
    body.classList.toggle('blackBody')
}
//model appear func
addMovie.addEventListener('click' , modelApper);
// add data of model
addButton.addEventListener('click' , addDataFunction)
// delete task
document.addEventListener('click' , deleteTask)