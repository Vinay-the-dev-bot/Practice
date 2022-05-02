var Total = document.getElementById("Total") 
var Total2 = document.getElementById("Total2") 
var Theater = document.getElementById("Venue")
var Movie = document.getElementById("Movie")
var NoOfTickets = document.getElementById("Tickets")
var Tier = document.getElementById("Tier")
const PVS = {}
console.log("sijvnisjvnsijnnv")
Total.addEventListener("click", () =>{
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
    Total2.innerText = Tier.value * NoOfTickets.value;
})
