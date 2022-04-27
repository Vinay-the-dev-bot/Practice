function myFunction(x) {
    x.classList.toggle("change");
  }

  // var coll = document.getElementsByClassName(""); 
  const coll = document.getElementsByClassName("collabutton");
  console.log("Coll : " + coll.length);
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var collabutton = this.nextElementSibling;
      if (collabutton.style.display === "block") {
        collabutton.style.display = "none";
        collabutton.style.maxHeight = "100px";
      
      } else {
        collabutton.style.display = "block";
        collabutton.style.maxHeight = collabutton.scrollHeight+"px";
      }
       
    });
  }


const tabs = document.querySelectorAll("[data-tab-target]")
const tabcontents = document.querySelectorAll(".panelsss") 

tabs.forEach(tab => {
   
  tab.addEventListener("click", () =>{
    const target = document.querySelector(tab.dataset.tabTarget)
    tabcontents.forEach(tabcontent =>{
      tabcontent.classList.remove("active1")
    })
    target.classList.add('active1')
  })
})
 

const menu = document.getElementById("MenuPanel22") 
menu.addEventListener("click", function(){ 

      if(getComputedStyle(menu).backgroundColor === "rgba(0, 0, 0, 0)"){ 
        menu.style.backgroundColor ="gray";
        menu.style.height= "160px"; 
        menu.style.borderRadius="10px" ; 
      }
      else{
        menu.style.backgroundColor ="rgba(0, 0, 0, 0)";
        menu.style.height= ""; 
      }

      const collabutton1 =  document.getElementById("MenuList1")  
        if ( getComputedStyle(collabutton1).display === "none") { 
          collabutton1.style.display="block"; 
          collabutton1.style.transition="5s";
      } else   {   
        collabutton1.style.display="none";  
      } 
      const menupanelbar22 =  document.getElementById("menupanelbar22")   
      if ( getComputedStyle(menupanelbar22).opacity === "1") {
        menu.style.paddingLeft = "100px";
        menu.style.fontSize = "0"; 
        
      } else  {  
        menu.style.paddingLeft = "0";  
      }
      const  dfghj =  document.getElementById("dfghj")   
      if ( getComputedStyle(dfghj).fontSize === "25px") {
        // menu.style.paddingLeft = "100px";
        dfghj.style.fontSize = "0"; 
        dfghj.style.transition = ".5s";
        
      } else  {  
        dfghj.style.fontSize = "25px";  
      }
})  