let btn = document.querySelector("button");
let para = document.querySelector("p");

/* btn.addEventListener("click",()=>{
    console.log("clicked")
    para.select();
    document.execCommand("copy");
    btn.innerHTML="COPIED"
}) */

btn.onclick = function() {
    para.select()
    document.execCommand("Copy")
}                                                                                                                                                                                                                                                                               