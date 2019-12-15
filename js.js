var cartAmount = 0;
var itemsInCart = {
  "Black!": [0, 59.99, 0, 0],
  "White!": [0, 59.98, 0, 0],
  "Blue!": [0, 59.97, 0, 0]
};
var reclaimSpots = false;
var itemsArray = [];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var weekDay = ["SundayDay", "MondayDay", "TuesdayDay", "WednesdayDay", "ThursdayDay", "FridayDay", "SaturdayDay"];
var arrayOfItems = ["Black!", "White!", "Blue!"];
var usedSpots = 0;
var permissionNot = "false";
var checkedot = "false";
var last = 0;

function refreshCart() {
  document.getElementById("cartNum").innerHTML = "Cart = " + cartAmount;
  itemsArray[cartAmount - 1] = document.getElementById("p1").innerHTML;
  var total = 0;
  for (var i = 0; i < 3; i++) {
    total += parseFloat(itemsInCart[arrayOfItems[i]][1] * itemsInCart[arrayOfItems[i]][0], 10);
  }
  document.getElementById('cartTotal').innerHTML = total.toFixed(2);
  //itemsInCart["item" + (cartAmount - 1)] = document.getElementById('myImage').name;
}

function addToCart() {
  cartAmount++;
  addCart();
  refreshCart();
  refreshNav();
}

function addCart() {
  if (itemsInCart[document.getElementById("p1").innerHTML][0] == 0) {
    itemsInCart[document.getElementById("p1").innerHTML][2] = 1;
  }
  itemsInCart[document.getElementById("p1").innerHTML][0]++;

}
$('document').ready(function(){
  $("#borgerJuice").click(function(){
    $("#borgerJuice").slideToggle(150);
    $("#header").delay(250).slideToggle(1500);
  });
  $("#closer").click(function(){
    $("#borgerJuice").slideToggle(150);
    $("#header").delay(250).slideToggle(1500);
  });
});
function swapper(anID, aPrice) {
  document.getElementById('myImage').src = document.getElementById(anID).src;
  document.getElementById('price1').innerHTML = aPrice;
  document.getElementById('p1').innerHTML = document.getElementById(anID).name;
  document.getElementById('myImage').name = document.getElementById(anID).name;
}

/* Set the width of the side navigation to 250px */
function refreshNav() {
  for (var i = 0; i < 3; i++) {
    document.getElementById("CartItem" + i).style.display = "none";
    document.getElementById("CartAmount" + i).style.display = "none";
    document.getElementById("img" + i).style.display = "none";
  }

  if (itemsInCart["White!"][0] != 0 || itemsInCart["Black!"][0] != 0 || itemsInCart["Blue!"][0] != 0) {
    if (itemsInCart["White!"][0] != 0) {
      if (itemsInCart["White!"][2] == 1 || reclaimSpots) {
        itemsInCart["White!"][2] = 0;
        itemsInCart["White!"][3] = usedSpots;
        usedSpots++;
      }
      document.getElementById("CartItem" + itemsInCart["White!"][3]).style.display = "block";
      document.getElementById("CartItem" + itemsInCart["White!"][3]).innerText = "White!"
      document.getElementById("img" + itemsInCart["White!"][3]).style.display = "block";
      document.getElementById("img" + itemsInCart["White!"][3]).style.width = "75px";
      document.getElementById("img" + itemsInCart["White!"][3]).src = "images/Ducky2.png";
      document.getElementById("CartAmount" + itemsInCart["White!"][3]).style.display = "block";
      document.getElementById("CartAmount" + itemsInCart["White!"][3]).innerText = itemsInCart["White!"][0];
    }
    if (itemsInCart["Blue!"][0] != 0) {
      if (itemsInCart["Blue!"][2] == 1 || reclaimSpots) {
        itemsInCart["Blue!"][2] = 0;
        itemsInCart["Blue!"][3] = usedSpots;
        usedSpots++;
      }
      document.getElementById("CartItem" + itemsInCart["Blue!"][3]).style.display = "block";
      document.getElementById("CartItem" + itemsInCart["Blue!"][3]).innerText = "Blue!"
      document.getElementById("img" + itemsInCart["Blue!"][3]).style.display = "block";
      document.getElementById("img" + itemsInCart["Blue!"][3]).style.width = "75px";
      document.getElementById("img" + itemsInCart["Blue!"][3]).src = "images/Ducky1.jpg";
      document.getElementById("CartAmount" + itemsInCart["Blue!"][3]).style.display = "block";
      document.getElementById("CartAmount" + itemsInCart["Blue!"][3]).innerText = itemsInCart["Blue!"][0];
    }
    if (itemsInCart["Black!"][0] != 0) {
      if (itemsInCart["Black!"][2] == 1 || reclaimSpots) {
        itemsInCart["Black!"][2] = 0;
        itemsInCart["Black!"][3] = usedSpots;
        usedSpots++;
      }

      document.getElementById("CartItem" + itemsInCart["Black!"][3]).style.display = "block";
      document.getElementById("CartItem" + itemsInCart["Black!"][3]).innerText = "Black!"
      document.getElementById("img" + itemsInCart["Black!"][3]).style.display = "block";
      document.getElementById("img" + itemsInCart["Black!"][3]).style.width = "75px";
      document.getElementById("img" + itemsInCart["Black!"][3]).src = "images/Ducky3.png";
      document.getElementById("CartAmount" + itemsInCart["Black!"][3]).style.display = "block";
      document.getElementById("CartAmount" + itemsInCart["Black!"][3]).innerText = itemsInCart["Black!"][0];
    }
    reclaimSpots = false;
    document.getElementById("Total1").style.display = "block";
    document.getElementById("Total1").innerText = "Total = " + document.getElementById('cartTotal').innerText;
    document.getElementById("CheckOut").style.display = "block";
    if(permissionNot == "true"){
      document.getElementById("CheckOut").innerHTML = "Check Out!";

    }
    else {
      document.getElementById("CheckOut").innerHTML = "Notification Permission Required";
      notifyMe();
    }
  } else {
    document.getElementById("CartItem0").style.display = "block";
    document.getElementById("CartItem0").innerText = "Your Cart is empty!";
    document.getElementById('cartTotal').innerHTML = "0.";
    document.getElementById("Total1").style.display = "none";
    document.getElementById("CheckOut").style.display = "none";
  }
}
function checkedout(){
if (permissionNot == "true"){
  checkedot = "true";
}

}
function openNav() {
  refreshNav();
  document.getElementById("mySidenav").style.width = "250px";
}
function openOtherNav() {
  document.getElementById("otherSideNav").style.width = "100%";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function closeOtherNav() {
  document.getElementById("otherSideNav").style.width = "0";
}
function notifyMe() {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  else if (Notification.permission === "granted") {
    permissionNot = "true";
    console.log("Granted");
  }
  else if (Notification.permission == "denied" || Notification.permission !== "granted") {
    Notification.requestPermission().then(function (permission) {
      if (permission == "granted") {
          permissionNot = "true";
          console.log("Granted after request");
      }
    });
  }
}
function on() {
  notifyMe();
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

function aboutMe() {

}

function removeItem(itme) {
  if (cartAmount > 0) {
    itemsInCart[document.getElementById("CartItem" + itme).innerHTML][0]--;
    if (itemsInCart[document.getElementById("CartItem" + itme).innerHTML][0] == 0) {
      usedSpots = 0;
      reclaimSpots = true;
    }
    cartAmount--;
    refreshCart();
    refreshNav();
  }

}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  var day = d.getDate();
  var month = d.getMonth();
  var yr = d.getFullYear();
  var wek = d.getDay();
  if (h >= 8 && h <= 18 && wek < 6 && wek > 0) {
    document.getElementById("open").innerHTML = "The store is currently OPEN";
    document.getElementById("storeImg").style.borderColor = "green";
  } else {
    document.getElementById("open").innerHTML = "The store is currently CLOSED";
    document.getElementById("storeImg").style.borderColor = "red";
  }
  document.getElementById(week[wek]).style.color = "black";
  document.getElementById(week[wek]).style.borderWidth = "2px";
  document.getElementById(week[wek]).style.borderColor = "green";
  document.getElementById(weekDay[wek]).style.color = "black";
  document.getElementById(weekDay[wek]).style.borderWidth = "2px";
  document.getElementById(weekDay[wek]).style.borderColor = "green";
  var pm = "A.M."
  if (wek < 6 && wek > 0 && h < 8 && h > 7) {
    document.getElementById("openSoon").style.display = "block";
  }
  else {
    document.getElementById("openSoon").style.display = "none";
  }
  if (wek < 6 && wek > 0 && h < 18 && h > 17) {
    document.getElementById("closeSoon").style.display = "block";
  }
  else {
    document.getElementById("closeSoon").style.display = "none";
  }
  if (h > 12) {
    h -= 12;
    var pm = "P.M."
  }
  if (last !== s && checkedot == "true"){
    var notification = new Notification('Hello There', {
 icon: 'images/hellothereSquare.jpg',
 body: 'General Kenobi',
});
    last = s;
  }
  if (day == 1) {
    var st = "st";
  }
  if (day == 2) {
    var st = "nd";
  }
  if (day == 3) {
    var st = "rd";
  }
  if (day > 3) {
    var st = "th";
  }
  var sec = "";
  if (s < 10) {
    sec = "0"
  }
  var min = "";
  if (m < 10) {
    min = "0"
  }
  var hor = "";
  if (h < 10) {
    hor = "0"
  }
  document.getElementById("clockie").innerHTML = ("Today is " + week[wek] + ", " + months[month] + " " + day + st + ", " + yr + ", " + "at " + hor + h + ":" + min + m + ":" + sec + s + " " + pm);
}

setInterval(time, 1000);
