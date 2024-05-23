const changeIcon = document.querySelector('.change-icon');

changeIcon.addEventListener("click",function (e) {
    console.log(changeIcon.getAttribute("class"))
    if(e.target.getAttribute("class")==="change-icon navbar-toggler-icon"){
        changeIcon.classList.remove("navbar-toggler-icon");
        changeIcon.classList.add("btn-close");
        console.log(changeIcon.getAttribute("class"));
    }else{
        changeIcon.classList.remove("btn-close");
        changeIcon.classList.add("navbar-toggler-icon");
        console.log(changeIcon.getAttribute("class"));
    }
});