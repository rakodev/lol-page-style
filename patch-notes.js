var attrBefore = document.getElementsByClassName("attribute-before");
for (var i = 0; i < attrBefore.length; i++) {
  attrBefore[i].style.textDecoration = "none";
  attrBefore[i].style.color = "tomato";
}
var attrAfter = document.getElementsByClassName("attribute-after");
for (var i = 0; i < attrAfter.length; i++) {
  attrAfter[i].style.color = "lime";
  attrAfter[i].style.fontWeight = "bold";
}
