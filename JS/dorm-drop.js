document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
});

document.getElementById("area-select").addEventListener("change", areaSelect());
/*
  var select = document.getElementById("selectNumber");
  var options = ["1", "2", "3", "4", "5"];

  for(var i = 0; i < options.length; i++) {
      var opt = options[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
  }​
*/
function areaSelect() {
  var x = document.getElementById("area-select").value;
  document.getElementById("demo").innerHTML += "You selected: ";
    var beaty =
      [ {val:"beaty", option:"Beaty Towers"}];
    var broward =
      [ {val:"broward", option:"Broward Hall"},
        {val:"rawlings", option:"Rawlings Hall"}];
    var murphree =
        [ {val:"buckman", option:"Buckman Hall"},
          {val:"fletcher", option:"Fletcher Hall"},
          {val:"murphree", option:"Murphree Hall"},
          {val:"sledd", option:"Sledd Hall"},
          {val:"thomas", option:"Thomas Hall"}];
    var yulee =
        [ {val:"buckman", option:"Buckman Hall"},
          {val:"fletcher", option:"Fletcher Hall"},
          {val:"murphree", option:"Murphree Hall"},
          {val:"sledd", option:"Sledd Hall"},
          {val:"thomas", option:"Thomas Hall"}];


    if (x == "beaty"){
      var area = beaty;
    }
      var select = document.getElementById("building-select");
      for(var i = 0; i < options.length; i++) {
        var el = document.createElement("option");
        el.text = area[i].option;
        el.value = area[i].val;
        select.add(el);
      }​
  }
