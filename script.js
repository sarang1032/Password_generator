const typepassword=document.querySelector("#generatepassword");
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbols="!@#$%^&*(){}[]:;',<>?/.|`_+-=";
const allseries=uppercase+lowercase+number+symbols;
let length=12;
function generate(){
    let password="";
    password+=uppercase[Math.floor(Math.random()*26)];
    password+=lowercase[Math.floor(Math.random()*26)];
    password+=number[Math.floor(Math.random()*10)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];
    while(length>password.length)
        password+=allseries[Math.floor(Math.random()*allseries.length)];
    typepassword.value=password;
}
function copy(){
    typepassword.select();
    // navigator.clipboard.writeText(typepassword.value);
    document.execCommand("copy");
    alert("Password Copied");
}
const copyimage=document.querySelector(".showpassword img");
copyimage.addEventListener("click",()=>{
    copy();
});