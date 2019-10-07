var groceries = {"10% off":-13.5,
                 "20% off":-23,
                 "35% off":-55,
                 "70% off":-110
                  };               /*different coupons specials*/
                  
var refreshments = {"Car":350,
                    "Van":670,
                    "Motor Bike":1150,
                    "Truck":723
                    };              /*different delivery specials*/

var grogList =""
for(let grog in groceries){
    grogList += grog + ": " + groceries[grog] + "\n"
}       /*This adds the items and the pices then loops through them*/

var refList = ""
for(let ref in refreshments){
    refList += ref + ": " + refreshments[ref] + "\n"
}         /*This adds the items and the pices then loops through them*/
function foodP(){    /*making a function so you can call it */
var picking = prompt("You can select your coupons? " +"\n"+"\n"+grogList)  /*This displays the prompt as a heading with the list of items*/

if(picking ==="10% off"){
    var total = (groceries["10% off"])
}
else if (picking ==="20% off"){
    total = (groceries["20% off"])
}
else if (picking ==="35% off"){
    total = (groceries["35% off"])
}
else if (picking ==="70% off"){
    total = (groceries["70% off"])
}
else{ prompt("Sorry You dont qaulify")}
 sessionStorage.setItem("total",total);
} 
         /*The items that you can choose from*/
function DrinkP(){   /*making a function so you can call it */   
var pickings = prompt("Select your delivery type?" + "\n"+"\n" +refList)    /*This displays the prompt as a heading with the list of items*/

if(pickings ==="Car"){
    var totals = (refreshments["Car"])
}
else if (pickings ==="Van"){
    totals = (refreshments["Van"])
}
else if (pickings ==="Motor Bike"){
    totals = (refreshments["Motor Bike"])
}
else if (pickings ==="Truck"){
    totals = (refreshments["Truck"])
}
else{ prompt("Collect in 30 days...")}
 sessionStorage.setItem("totals",totals);
}
       /*The items that you can choose from*/

function tip(){    /*making a function so you can call it */
var tip = 15.7
alert("Vat Added is " + tip +"%" )
sessionStorage.setItem("tip",tip)
}

function fullAmount(){    /*making a function so you can call it */
    let tip = Number(sessionStorage.getItem("tip"))
    let total = Number(sessionStorage.getItem("total"))
    let totals = Number(sessionStorage.getItem("totals"))
    let fullAmount = (Number(tip) + Number(total) + Number(totals))    /*This calculates or adds the total of the drinks , refreshments and the waiters tip*/
    alert("Your Bill is R"+fullAmount)           /*The calculated tip*/
}

$(document).ready(function(){
    $("#ee").click(function(){
    $("*").slideUp(2000);
    $("*").slideDown(2000);
    });                                       /*This function makes the page dissapear by clicking a button an as your stuff loads back the background changes*/
});
$(document).ready(function(){
  $(".dd").hide();
   $("section").css("display","block");
  $(".cc").hover(function(){
  $(this).next().slideToggle(500);
      });                                  /*This makes the hovering of the dropdown, and hiding the info but when you hover over it it displays the info */
  });

