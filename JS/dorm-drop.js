document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, []);
});

const buildings ={
  beaty:[
    {val:"beaty", option:"Beaty Towers"}
  ],
  broward:[
    {val:"broward", option:"Broward Hall"},
    {val:"rawlings", option:"Rawlings Hall"}
  ],
  graham:[
    {val:"graham", option:"Graham Hall"},
    {val:"simpson", option:"Simpson Hall"},
    {val:"trusler", option:"Trusler Hall"}
  ],
  hume:[
    {val:"hume", option:"Hume Hall"}
  ],
  infinity:[
    {val:"infinity", option:"Infinity Hall"}
  ],
  jennings:[
    {val:"jennings", option:"Jennings Hall"}
  ],
  keys:[
    {val:"keys", option:"Keys Complex"}
  ],
  lakeside:[
    {val:"lakeside", option:"Lakeside Complex"}
  ],
  murphree:[
    {val:"buckman", option:"Buckman Hall"},
    {val:"fletcher", option:"Fletcher Hall"},
    {val:"murphree", option:"Murphree Hall"},
    {val:"sledd", option:"Sledd Hall"},
    {val:"thomas", option:"Thomas Hall"}
  ],
  springs:[
    {val:"springs", option:"Springs Complex"}
  ],
  tolbert:[
    {val:"east", option:"East Hall"},
    {val:"north", option:"North Hall"},
    {val:"riker", option:"Riker Hall"},
    {val:"tolbert", option:"Tolbert Hall"},
    {val:"weaver", option:"Weaver Hall"}
  ],
  yulee:[
    {val:"cypress", option:"Cypress Hall"},
    {val:"mallory", option:"Mallory Hall"},
    {val:"reid", option:"Reid Hall"},
    {val:"yulee", option:"Yulee Hall"}
  ],
  null:[
    {val:"", option:"Building"}
  ]
}


$('#area').on('change', (e) => {
  onAreaChange(e.target.value);
});

const onAreaChange = (val) =>{
  if(buildings[val]){
    //actually run the rebuild
    $('#building').empty();
    let output = `<div class="input-field col s12">
        <select id="building-select" onchange="">`;
    buildings[val].forEach((element)=>{
      console.log(element);
        output += `<option value="${element.val}"  >${element.option}</option>`;
    });
    output += `/select>
        </div>`;
    $('#building').append(output);
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, []);
  }else{
    //just empty it
    $('#building').empty();
  }
}

$('#building').on('change', (e) => {
  onBuildingChange(e.target.value);
});

const onBuildingChange = (val) =>{
  if(room[val]){
    //actually run the rebuild
    $('#room').empty();
    let output = `<div class="input-field col s12">
        <select id="building-select" onchange="">`;
    buildings[val].forEach((element)=>{
      console.log(element);
        output += `<option value="${element.val}"  >${element.option}</option>`;
    });
    output += `/select>
        </div>`;
    $('#building').append(output);
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, []);
  }else{
    //just empty it
    $('#building').empty();
  }
}



//onAreaChange("null");
//document.getElementById("area-select").addEventListener("change", areaSelect());
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
/*

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
*/
