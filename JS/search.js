$( function() {
  $( "ul.droptrue" ).sortable({
    connectWith: "ul"
  });

  $( "ul.dropfalse" ).sortable({
    connectWith: "ul",
    dropOnEmpty: false
  });

  $( "#priorities, #nopreference" ).disableSelection();
} );

var elem = document.querySelector('.collapsible.expandable');
var instance = M.Collapsible.init(elem, {
  accordion: false
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {
    accordion: false
  });
});

$(".party-panel").css({'height':($(".profile-pic-panel").height()+20+'px')});
$(".match-panel").css({'height':($(".profile-pic-panel").height()+20+'px')});
$(".info-panel").css({'height':($(".profile-pic-panel").height()+20+'px')});
