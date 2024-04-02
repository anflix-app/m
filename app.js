/*toggle nav bar start here*/
const navIcon = document.querySelector(".nav-icon");
const manu = document.querySelector(".manu");

navIcon.addEventListener("click", () => {
  manu.classList.toggle("active");
})
/*toggle nav bar end here*/


/*search bar start here*/
function filter(){
    
  var filterValue, input, ul,li,a,i;
   input = document.getElementById("search");
   filterValue = input.value.toUpperCase();
  ul = document.getElementById("Menu");
   li = ul.getElementsByTagName("li");
      
      for (i = 0 ; i < li.length ; i++){
          a = li[i].getElementsByTagName("a")[0];
          if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
              li[i].style.display = "";
              
          }else{
              li[i].style.display = "none";
          }
      }
  }
  
/*search bar end here*/
