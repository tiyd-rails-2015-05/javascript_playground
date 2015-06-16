// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

surveys[questions_attributes][1][text]

function defaultName() {
  var field = document.getElementById("name_field");
  field.value = "Defaaaaauuuu";
}

function toggleSection() {
  var section = document.getElementById("show_hide_section");
  if(section.style.display === "block") {
    section.style.display = "none";
  } else {
    section.style.display = "block";
  }
}

function copySection() {
  var section = document.getElementById("copy_section");
  var last = section.lastElementChild;
  var copy = last.cloneNode(true);
  section.appendChild(copy);
}
