function myFunction(x) {
    x.classList.toggle("change");
}

const coll = document.getElementsByClassName("collabutton"); 
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
  dfghj.style.fontSize = "0"; 
  dfghj.style.transition = ".5s";
} else  {  
  dfghj.style.fontSize = "25px";  
}
})  

const slider = document.getElementById("outerbox1")
slider.addEventListener("click", () => {
  const circle = document.getElementById("insidecircle1"); 
  if(getComputedStyle(circle).left == "5px"){ 
  circle.style.left= "50%";
  slider.style.backgroundColor = "#1877F2";
  }else{
    circle.style.left= "5px";
    slider.style.backgroundColor = "rgb(179, 171, 171)";
  }
})

const slider2 = document.getElementById("OuterBox")
const circle2 = document.getElementById("InnerBox");
const text = document.getElementById("BoxText")
circle2.addEventListener("click", () => { 
  if(getComputedStyle(circle2).left == "5px"){ 
  circle2.style.left= "47%";
  slider2.style.backgroundColor = "#8f44fd";
  text.innerText="No"
  }else {
  circle2.style.left= "5px";
  slider2.style.backgroundColor = "rgb(179, 171, 171)";
  text.innerText="Yes"
  }
})
var BookSeats = document.getElementById("BookSeats") 
var Total2 = document.getElementById("Total2") 
var Theater = document.getElementById("Venue")
var Movie = document.getElementById("Movie")
var NoOfTickets = document.getElementById("Tickets")
var Tier = document.getElementById("Tier")
var TimeSlot = document.getElementById("TimeSlots")

BookSeats.addEventListener("click", () =>{
        
    var timevalue = 0;
    var BasicPrice = 0;
    console.log("2 : " + Theater.value)
    console.log("3 : " + Movie.value)
    console.log("4 : " + NoOfTickets.value)
    console.log("5 : " + Tier.value)
    if(Theater.value == "None" ){
        alert("Select Venue")
    }else if(Movie.value == "None" ){
        alert("Select Movie")
    }
    else if(NoOfTickets.value == "None" ){
        alert("Select Number Of Tickets")
    }
    else if(Tier.value == "None" ){
        alert("Select Tier")
    }
    
    if(Theater.value == "PVR Vaishnavi Sapphire" || Theater.value == "PVR Orion Mall"){
        BasicPrice = 200;
    }else if(Theater.value == "Inox Mantri Square"){
        BasicPrice = 250;
    }else{
        BasicPrice = 100;
    }

    if(TimeSlot.value == 25){
        timevalue = 25
    }else if(TimeSlot.value == 50){
        timevalue = 50
    }else if(TimeSlot.value == 75){
        timevalue = 75
    }else if(TimeSlot.value == 100){
        timevalue = 100
    } 
    console.log("Ratings : " + Movie.ratings)
    console.log("Name : " + Movie.value)
    console.log(TimeSlot.options[TimeSlot.selectedIndex].text)
    console.log(TimeSlot.selectedIndex)
    console.log("Basic Price : "  + BasicPrice)
    // TotalValue.innerText =  eval(Tier.value * NoOfTickets.value + BasicPrice  * NoOfTickets.value + timevalue * NoOfTickets.value );
    TotalValue.innerText =  eval((Tier.value *1 +BasicPrice* 1 +  timevalue * 1) * NoOfTickets.value);
})

var Seats = document.getElementsByClassName("grid-item")
console.log("Seats Lgngh : " +Seats.length)