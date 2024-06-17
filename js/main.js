
let link=document.getElementsByClassName("link");
let currentValue=1;

function activeLink(){
   
    for(l of link){
        l.classList.remove("active")

    }
    event.target.classList.add("active")
    currentValue=event.target.value;


}

function preview(){
     
      if(currentValue > 1){

        for(l of link){
            l.classList.remove("active")
    
        }
        currentValue--;
        link[currentValue].classList.add("active")

      }


}


let menuItems=document.getElementById("menuId");

function menuToggle(){

   
    if(menuItems.style.display =='none'){

        menuItems.style.display='block';
    }else{
        menuItems.style.display='none';

    }

  
}


  









