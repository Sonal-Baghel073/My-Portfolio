let tablinks = document.querySelectorAll(".tab-links");
let tabcontents = document.querySelectorAll(".tab-contents");
function opentab(tabname){
    for( let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for( let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document. getElementById(tabname).classList.add("active-tab")
}

let sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
const scriptURL = "";
const form = document.forms[""];
const msg = document.getElementById("msg");
form.addEventListener('submit',e=>{
    e.preventDefault()
    fetch(scriptURL,{method:'POST',body:new FormData(form)})
    .then(response =>{
        msg.innerHTML = "Message sent successfully";
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.erroe('Error!', error.message))
})
