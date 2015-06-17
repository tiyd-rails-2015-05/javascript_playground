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

function defaultName() {
  $("#name_field").val("Defaaaaauuuu").css("font-size", "200px");
}

function toggleSection() {
  var section = $("#show_hide_section");
  if($("#show_checkbox").is(':checked')) {
    section.show();
  } else {
    section.hide();
  }
}

function copySection() {
  var section = $("#copy_section");
  section.append(section.children().last().clone());
}
