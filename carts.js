function item(name, prices) {        /*making the name and prices so you can call it whenever*/
    this.name = name
    this.prices = prices
}
total = 0    /*this counts the totals*/

var Bcake = new item("Birthday cakes", 135);
var Tricake = new item("Triple coated caramel cake", 250);
var Sponcake = new item("Spongy block cake", 35);
var cakeTur = new item("Cake Tutorials", 305);
var Redvelvet = new item("Red velvet", 115);
var Tarts = new item("Tarts", 75);
var Darcake = new item("Dark Choc cakes", 100);
var BlueCake = new item("Blueberry Cake", 165);
var Ctart = new item("Crusty Tart", 93);   /*This stores my cakes with the prices*/

sessionStorage.setItem("Catalogue", JSON.stringify([Bcake, Tricake, Sponcake, cakeTur, Redvelvet, Tarts, Darcake, BlueCake, Ctart]));
/*This stores the values*/
function add1() {
    total += 135
    alert("This cost R" + total)          /*displays the alert and adds all the totals that you clicked*/
    add.push(Bcake)
    sessionStorage.setItem("item", JSON.stringify(Bcake))        /*Stores the prices an adds the previous one*/
}  

function add2() {
    total += 250
    alert("Final total for the cakes cost R" + total)     /*displays the alert and adds all the totals that you clicked*/
    add.push(Tricake)
    sessionStorage.setItem("item", JSON.stringify(Tricake))       /*Stores the prices an adds the previous one*/
}

function add3() {
    total += 35
    alert("Final total for the cakes cost R" + total)      /*displays the alert and adds all the totals that you clicked*/
    add.push(Sponcake)
    sessionStorage.setItem("item", JSON.stringify(Sponcake))         /*Stores the prices an adds the previous one*/
}

function add4() {
    total += 305
    alert("Final total for the cakes cost R" + total)         /*displays the alert and adds all the totals that you clicked*/
    add.push(cakeTur)
    sessionStorage.setItem("item", JSON.stringify(cakeTur))          /*Stores the prices an adds the previous one*/
}

function add5() {
    total += 115
    alert("Final total for the cakes are R" + total)      /*displays the alert and adds all the totals that you clicked*/
    add.push(Redvelvet) 
    sessionStorage.setItem("item", JSON.stringify(Redvelvet))            /*Stores the prices an adds the previous one*/
}

function add6() {
    total += 75
    alert("Final total for the cakes are R" + total)         /*displays the alert and adds all the totals that you clicked*/
    add.push(Tarts)
    sessionStorage.setItem("item", JSON.stringify(Tarts))              /*Stores the prices an adds the previous one*/
}

function add7() {
    total += 100
    alert("Final total for the cakes are R" + total)          /*displays the alert and adds all the totals that you clicked*/
    add.push(Darcake)
    sessionStorage.setItem("item", JSON.stringify(Darcake))            /*Stores the prices an adds the previous one*/
}

function add8() {
    total += 165
    alert("Final total for the cakes are R" + total)          /*displays the alert and adds all the totals that you clicked*/
    add.push(BlueCake)
    sessionStorage.setItem("item", JSON.stringify(BlueCake))
}

function add9() {
    total += 93
    alert("Final total for the cakes are R" + total)          /*displays the alert and adds all the totals that you clicked*/
    add.push(Ctart)
    sessionStorage.setItem("item", JSON.stringify(Ctart))             /*Stores the prices an adds the previous one*/
}

function reff(){
    alert("Your Reference no. is 475837498234")                /*this makes the alert for your reference number so when you done shopping and confirm the purchse*/
}

$(document).ready(function(){         
    $("#bb").click(function(){
        $("#bb").fadeOut(2000);
        $("#bb").fadeIn(500);
     });                                  /*This makes the items thats listed and fades it away an comes back at a certain speed*/
    });

$(document).ready(function(){
  $("#hide").click(function(){
    $("h1").hide();
  });
  $("#show").click(function(){
    $("h1").show();
  });
});                             /*This makes buttons so if you click on them it does what you assign it to do*/ 
