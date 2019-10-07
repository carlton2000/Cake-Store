var amount = parseInt(localStorage.getItem("Amount"));
document.getElementById("itemTotal").append(amount);

var x = JSON.parse(localStorage.getItem("Items"));
var y = document.getElementById("stuff");

x.forEach(function(z) {
    var xx = document.createElement("div");
    y.appendChild(xx);

    var yy = document.createElement("div");
    yy.innerHTML = z.name;
    xx.appendChild(yy);

    var yy = document.createElement("div");
    yy.innerHTML = z.price;
    xx.appendChild(yy);
});

var a = parseInt(localStorage.getItem("Amount"));
var b = document.getElementById("cop1")

b.addEventListener("click", function() {
    localStorage.setItem("Amount", a * 0.35);
    alert("Final Amount of Items is R" + a);
});

function item(name, prices) {
    this.name = name
    this.price = prices
};

let Bcake = new item("Birthday cakes", 135);
let Tricake = new item("Triple coated caramel cake", 250);
let Sponcake = new item("Spongy block cake", 35);
let cakeTur = new item("Cake Tutorials", 305);
let Redvelvet = new item("Red velvet", 115);
let Tarts = new item("Tarts", 75);
let Darcake = new item("Dark Choc cakes", 100);
let BlueCAke = new item("Blueberry Cake", 165);
let Ctart = new item("Crusty Tart", 93);

sessionStorage.setItem("Catalogue", JSON.stringify([Bcake, Tricake, Sponcake, cakeTur, Redvelvet, Tarts]));

var amount = parseInt(localStorage.getItem("Amount"));
if (!amount) {
    amount = 0;
    var items = [];
    localStorage.setItem("Items", JSON.stringify(items));
} else {
    var items = JSON.parse(localStorage.getItem("Items"));
};

localStorage.setItem("Amount", amount);

if (!items) {}

function add1() {
    var num1 = JSON.parse(sessionStorage.getItem("Catalogue"));
    var num2 = JSON.parse(sessionStorage.getItem("Items"));
    var num3 = parseInt(sessionStorage.getItem("Amount"));

    if (num2 == null) {
        num2 = [num1[0]];
    } else {
        num2.push(num1[0]);
    };

    localStorage.setItem("Items", JSON.stringify(num2));

    localStorage.setItem("Amount", num3 += num1[0].price);
    alert("This is the current total of the items R" + num3);
};

function add2() {
    var num1 = JSON.parse(sessionStorage.getItem("Catalogue"));
    var num2 = JSON.parse(sessionStorage.getItem("Items"));
    var num3 = parseInt(sessionStorage.getItem("Amount"));

    if (num2 == null) {
        num2 = (num1[1]);
    } else {
        num2.push(num1[1]);
    };
    localStorage.setItem("Items", JSON.stringify(num2));

    localStorage.setItem("Amount", num3 += num1[1].price);
    alert("This is the current total of the items R" + num3);
};

function add3() {
    var num1 = JSON.parse(sessionStorage.getItem("Catalogue"));
    var num2 = JSON.parse(sessionStorage.getItem("Items"));
    var num3 = parseInt(sessionStorage.getItem("Amount"));

    if (num2 == null) {
        num2 = (num1[2]);
    } else {
        num2.push(num1[2]);
    };
    localStorage.setItem("Items", JSON.stringify(num2));

    localStorage.setItem("Amount", num3 += num1[2].price);
    alert("This is the current total of the items R" + num3);
};

function add4() {
    var num1 = JSON.parse(sessionStorage.getItem("Catalogue"));
    var num2 = JSON.parse(sessionStorage.getItem("Items"));
    var num3 = parseInt(sessionStorage.getItem("Amount"));

    if (num2 == null) {
        num2 = (num1[3]);
    } else {
        num2.push(num1[3]);
    };
    localStorage.setItem("Items", JSON.stringify(num2));

    localStorage.setItem("Amount", num3 += num1[3].price);
    alert("This is the current total of the items R" + num3);
};

function add5() {
    var num1 = JSON.parse(sessionStorage.getItem("Catalogue"));
    var num2 = JSON.parse(sessionStorage.getItem("Items"));
    var num3 = parseInt(sessionStorage.getItem("Amount"));

    if (num2 == null) {
        num2 = (num1[4]);
    } else {
        num2.push(num1[4]);
    };
    localStorage.setItem("Items", JSON.stringify(num2));

    localStorage.setItem("Amount", num3 += num1[4].price);
    alert("This is the current total of the items R" + num3);
};

function add6() {
    var num1 = JSON.parse(sessionStorage.getItem("Catalogue"));
    var num2 = JSON.parse(sessionStorage.getItem("Items"));
    var num3 = parseInt(sessionStorage.getItem("Amount"));

    if (num2 == null) {
        num2 = (num1[5]);
    } else {
        num2.push(num1[5]);
    };
    localStorage.setItem("Items", JSON.stringify(num2));

    localStorage.setItem("Amount", num3 += num1[5].price);
    alert("This is the current total of the items R" + num3);
};

function add7() {
    var num1 = JSON.parse(sessionStorage.getItem("Catalogue"));
    var num2 = JSON.parse(sessionStorage.getItem("Items"));
    var num3 = parseInt(sessionStorage.getItem("Amount"));

    if (num2 == null) {
        num2 = (num1[6]);
    } else {
        num2.push(num1[6]);
    };
    localStorage.setItem("Items", JSON.stringify(num2));

    localStorage.setItem("Amount", num3 += num1[6].price);
    alert("This is the current total of the items R" + num3);
};

function add8() {
    var num1 = JSON.parse(sessionStorage.getItem("Catalogue"));
    var num2 = JSON.parse(sessionStorage.getItem("Items"));
    var num3 = parseInt(sessionStorage.getItem("Amount"));

    if (num2 == null) {
        num2 = (num1[7]);
    } else {
        num2.push(num1[7]);
    };
    localStorage.setItem("Items", JSON.stringify(num2));

    localStorage.setItem("Amount", num3 += num1[7].price);
    alert("This is the current total of the items R" + num3);
};

function add9() {
    var num1 = JSON.parse(sessionStorage.getItem("Catalogue"));
    var num2 = JSON.parse(sessionStorage.getItem("Items"));
    var num3 = parseInt(sessionStorage.getItem("Amount"));

    if (num2 == null) {
        num2 = (num1[8]);
    } else {
        num2.push(num1[8]);
    };
    localStorage.setItem("Items", JSON.stringify(num2));

    localStorage.setItem("Amount", num3 += num1[8].price);
    alert("This is the current total of the items R" + num3);
};

var m = parseInt(localStorage.getItem("Amount"));

let pick = null;
$("#btn1").click(function() {
    if (pick != null) {
        if (pick == false) {
            localStorage.setItem("Amount", m += 50);
            alert("The order is R" + m)
            pick = true;
        };
    } else if (pick == null) {
        localStorage.setItem("Amount", m += 70);
        alert("The order is R" + m)
        pick = true;
    };
});

$("#btn2").click(function() {
    if (pick != null) {
        if (pick == true) {
            localStorage.setItem("Amount", m -= 50);
            alert("Your order is R" + m)
            pick = false;
        };
    } else if (pick == null) {
        localStorage.setItem("Amount", m += 60)
        alert("Your order is R", +m)
        pick = false;
    };
});

function purchase() {
    var nn = parseInt(localStorage.getItem("Amount"));
    var oo = JSON.parse(localStorage.getItem("Items"));

    localStorage.setItem("Amount", 0)
    localStorage.setItem("Items", JSON.stringify([]));

    var mm = (Math.random() * 0xFFFFFF).toString(16)
    alert("REFERENCE NO. " + mm)
}