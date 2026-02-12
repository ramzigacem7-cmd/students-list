
const page=document.body.dataset.page;
if(page === "students"){
// Load data fron locale storage

let students=JSON.parse(localStorage.getItem("students")) ||[];

function displaystudents(){
    let container=document.querySelector(".container");
     container.innerHTML = "";
    students.forEach((student,i) =>{
     container.innerHTML += `
         <tr>
        <td>${i+1}</td>
        <td class="data_id">${student.ID}</td>
        <td >${student.fname}</td>
        <td >${student.lname}</td>
        <td >${student.gender}</td>
        <td >${student.date}</td>
        <td >${student.average}</td>
        </tr>
        `;
    })
 }
 
// Variables

const searchID = document.getElementById("searchID");   
const my_menu = document.getElementById("menu");
const my_nav = document.querySelector(".nav_bar");
const my_exit = document.getElementById("exit");

// sreach for student by using his ID

let base_color= null;
searchID.addEventListener("keydown",(e) => {
     if(e.key !== "Enter")return;
    if(searchID.value == "")return;
    const id = searchID.value.trim();
    const myID = document.querySelectorAll(".data_id");
     let  found=false;
    if(base_color){
     base_color.style.color="black";
     base_color=null;
    }
   
   students.forEach((student,index)=>{
   if(student.ID === id){
    myID[index].style.color ="red";
    base_color = myID[index];
    found = true;
   }
   });
   searchID.value = "";
   if(!found){
    alert("this ID doesn't exist!");
   }
});

// show and hide the menu

my_menu.addEventListener("click", ()=>{
    my_nav.style.display="flex";
    my_nav.classList.toggle("active");
})
my_exit.addEventListener("click", ()=>{
     my_nav.style.display="none";
})

const add_student = document.querySelector(".add_stud");

add_student.addEventListener("click", ()=>{
 window.location.href="index1.html"
})


const delete_exit = document.getElementById("d_exit");
const delete_form = document.querySelector(".delete_form");
const delete_student = document.querySelector(".delete_stud");
const delete_id =document.getElementById("d_id");
const delete_button = document.getElementById("d_button");

delete_student.addEventListener("click", ()=>{
    delete_form.classList.toggle("hidden");
     my_nav.style.display="none";
})
delete_exit.addEventListener("click", (e)=>{
    delete_form.classList.toggle("hidden");
})

delete_button.addEventListener("click", ()=>{
   delete_form.classList.toggle("hidden");
    
    let d_id = delete_id.value.trim();
    if(d_id === "")return;
    let exist = false;
    for(let i=0 ; i<students.length;i++){
        if(students[i].ID === d_id){
           students.splice(i, 1);
           localStorage.setItem("students",JSON.stringify(students));
           displaystudents();
           exist = true;
           break;
        }
    }
    if(!exist){
            alert("this ID doesn't exist");
        }
})

const yes_button = document.getElementById("yes_btn");
const no_button = document.getElementById("no_btn");
const delete_all = document.querySelector(".delete_all")
const delete_all_form = document.querySelector(".delete_all_form");

delete_all.addEventListener("click",()=>{
  delete_all_form.classList.toggle("hidden");
  
})

no_button.addEventListener("click", ()=>{
     delete_all_form.classList.toggle("hidden");
})

yes_button.addEventListener("click", ()=>{
   localStorage.removeItem("students");
   students = [];
   displaystudents();
    delete_all_form.classList.toggle("hidden");
})

 displaystudents();

}

if(page === "add"){
    

const my_btn_add = document.getElementById("add");


class student{
    constructor(ID,fname,lname,gender,date,average){
    this.ID=ID;
    this.fname=fname;
    this.lname=lname;
    this.gender=gender;
    this.date=date;
    this.average=average;
    }
 }

 let students = JSON.parse(localStorage.getItem("students")) || [];
 
 const my_inputs = document.querySelectorAll(".add_student input")

my_btn_add.addEventListener("click", ()=>{
    let id =document.querySelector(".id").value;
 let fname =document.querySelector(".fname").value;
 let lname =document.querySelector(".lname").value;
 let gender_input =document.querySelector('input[name="gender"]:checked');
 if(!gender_input ){
    alert("choose the gender!");
    return;
 }
    let gender = gender_input.value;
 let date =document.querySelector(".date").value;
 let average =document.querySelector(".average").value;

if(!id || !fname || !lname || !date || !average){
    alert("please fill all fields");
    return;
}

let newstudent =new student(id,fname,lname,gender,date,average);
students.push(newstudent);
localStorage.setItem("students",JSON.stringify(students));
clear_inputs();
window.location.href="index.html";
})


 function clear_inputs(){
   document.querySelector(".id").value="";
   document.querySelector(".fname").value="";
   document.querySelector(".lname").value="";
   document.querySelectorAll('input[name="gender"]').forEach(r=>r.checked=false);
   document.querySelector(".date").value="";
   document.querySelector(".average").value="";
 }


}






