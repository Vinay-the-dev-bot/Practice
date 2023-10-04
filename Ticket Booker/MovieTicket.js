var BookSeats = document.getElementById("BookSeats") 
var Total2 = document.getElementById("Total2") 
var Theater = document.getElementById("Venue")
var Movie = document.getElementById("Movie")
var NoOfTickets = document.getElementById("Tickets")
var Tier = document.getElementById("Tier")
var TimeSlot = document.getElementById("TimeSlots")

BookSeats.addEventListener("click", () =>{

    console.log("BookSeats : "  + BookSeats)
    console.log("Total2 : " + Total2)
    console.log("Theater : " + Theater)
    console.log("Movie : " + Movie)
    console.log("NoOfTickets : " + NoOfTickets)
    console.log("Tier : " +  Tier)
    console.log("TimeSlot : " + TimeSlot)
        
    var timevalue = 0;
    var BasicPrice = 0;
    console.log("Theatre : " + Theater.value)
    console.log("Movie : " + Movie.value)
    console.log("No Of Tickets : " + NoOfTickets.value)
    console.log("Price : " + Tier.value)
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
    console.log("Time1  : " + TimeSlot.options[TimeSlot.selectedIndex].text)
    console.log("Time2 : " + TimeSlot.selectedIndex)
    console.log("Basic Price : "  + BasicPrice)
    // TotalValue.innerText =  eval(Tier.value * NoOfTickets.value + BasicPrice  * NoOfTickets.value + timevalue * NoOfTickets.value );
    TotalValue.innerText =  eval((Tier.value *1 +BasicPrice* 1 +  timevalue * 1) * NoOfTickets.value);
})

var Seats = document.getElementsByClassName("grid-item")
console.log("Seats Lgngh : " +Seats.length)
