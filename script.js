var seen = document.querySelector("h1")
var addFriend= document.querySelector(".button")


let flag =0;

addFriend.addEventListener("click",function(){
if(flag==0){
  seen.innerHTML = "Friends"
    seen.style.color ="#5bec37"
    addFriend.innerHTML= "Remove Friend"
    flag=1
}
else{
    seen.innerHTML = "Stranger"
    seen.style.color ="Red"
    addFriend.innerHTML= "Add Friend"
    flag=0
}
  
});

