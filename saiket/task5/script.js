/* Blog Publish Function */

function addPost(){

let title=document.getElementById("title").value
let content=document.getElementById("content").value

if(title=="" || content==""){
alert("Please enter title and content")
return
}

let post=document.createElement("div")

post.innerHTML="<h3>"+title+"</h3><p>"+content+"</p><hr>"

document.getElementById("posts").appendChild(post)

document.getElementById("title").value=""
document.getElementById("content").value=""

}


/* Greeting */

let nameInput=document.getElementById("username")

if(nameInput){
nameInput.addEventListener("input",function(){

document.getElementById("greeting").innerText="Hello "+this.value

})
}


/* Character Counter */

let textInput=document.getElementById("textInput")

if(textInput){

textInput.addEventListener("input",function(){

document.getElementById("charCount").innerText=this.value.length

})

}


/* Clock */

function updateClock(){

let now=new Date()

document.getElementById("clock").innerText=now.toLocaleTimeString()

}

if(document.getElementById("clock")){

setInterval(updateClock,1000)

}


/* To Do List */

function addTask(){

let taskInput=document.getElementById("taskInput")

let task=taskInput.value

if(task=="") return

let li=document.createElement("li")

li.innerText=task

document.getElementById("taskList").appendChild(li)

taskInput.value=""

}