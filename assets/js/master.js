function openPlus(id , a) {
  var x = document.getElementById(id);
  var el = document.getElementById(a);
  if (el.ariaExpanded) {
    x.className = "close-plus";
    return el.ariaExpanded=false;
  } 
  else {
    x.className = "open-plus";
    return el.ariaExpanded=true;
  }
}
