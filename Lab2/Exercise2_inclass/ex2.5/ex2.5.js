var menu = document.getElementById("menu");
var lis = menu.getElementsByTagName("li");

for (var i = 0; i < lis.length; i++) {
  var li = lis[i];
  li.addEventListener("mouseover", function() {
    this.getElementsByTagName("a")[0].style.color = "#8080ff";
  });
  li.addEventListener("mouseout", function() {
    this.getElementsByTagName("a")[0].style.color = "#000000";
  });
}
