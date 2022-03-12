let cont=document.querySelector("#scroll-content")
var roll=1
function loadMoreContent(){
    for(let i=1;i<=20;i++){
        let h1=document.createElement("h1")
        h1.innerText=`Masai Student Id: ${roll++}`
        cont.appendChild(h1)
    }
}
cont.addEventListener("scroll", function(){
    // console.log(cont.scrollY)
    // console.log(cont.innerHeight)
    if(cont.scrollTop + cont.clientHeight >= cont.scrollHeight){
        loadMoreContent();
    }
})
loadMoreContent();
