var Vue = require('vue')
var hello = require('./components/HeaderBar.vue')

new Vue({
   el: "body",
   render: h => h(hello)
});﻿

document.getElementById('menu').onclick = function(event) {
  var target = event.target;
  if (target.className == 'header-bar link') {
  var s = document.getElementsByClassName('header-bar');
  for(var i = 0; i < s.length; i++){
    s[i].classList.remove("active");
  }
  target.classList.add('active');
}
}
