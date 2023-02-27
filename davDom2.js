let input=document.querySelector(".inputtxt");
let closeEye=document.querySelector(".eye-close");
let openEye=document.querySelector(".eye-open");
let iconEye=document.querySelector(".iconEye");
iconEye.addEventListener('click', function(){
    if (input.type=="text"){
        input.type="password";
        closeEye.classList.remove('slash-div-show');
        openEye.classList.remove('slash-div-show');
} else{
    input.type="text";
    closeEye.classList.add('slash-div-show');
    openEye.classList.add('slash-div-show');
}         
})

