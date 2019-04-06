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

let roomNumbers ={
  beaty:[
    {
      "available": 20,
      "size": 4,
      "floor": 1,
      "type": "Apartment"
    },
    {
      "available": 15,
      "size": 4,
      "floor": 2,
      "type": "Apartment"
    },
    {
      "available": 12,
      "size": 4,
      "floor": 3,
      "type": "Apartment"
    },
    {
      "available": 23,
      "size": 4,
      "floor": 4,
      "type": "Apartment"
    },
    {
      "available": 19,
      "size": 4,
      "floor": 5,
      "type": "Apartment"
    },
    {
      "available": 21,
      "size": 4,
      "floor": 6,
      "type": "Apartment"
    },
    {
      "available": 23,
      "size": 4,
      "floor": 7,
      "type": "Apartment"
    }
  ],
  broward:[
    {
      "available": 1,
      "size": "Single",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 20,
      "size": "Double",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 22,
      "size": "Double",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 14,
      "size": "Double",
      "floor": 3,
      "type": "Traditional"
    },
    {
      "available": 12,
      "size": "Double",
      "floor": 4,
      "type": "Traditional"
    },
    {
      "available": 18,
      "size": "Double",
      "floor": 5,
      "type": "Traditional"
    },
    {
      "available": 1,
      "size": "Triple",
      "floor": 4,
      "type": "Traditional"
    },
  ],
  rawlings:[
    {
      "available": 9,
      "size": "Double",
      "floor": 1,
      "type": "Apartment"
    },
    {
      "available": 8,
      "size": "Double",
      "floor": 3,
      "type": "Traditional"
    },
    {
      "available": 3,
      "size": "Double Suite",
      "floor": 4,
      "type": "Suite"
    }
  ],
  graham:[
    {
      "available": 10,
      "size": "Double",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 19,
      "size": "Double",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 20,
      "size": "Double",
      "floor": 3,
      "type": "Traditional"
    },
    {
      "available": 13,
      "size": "Double",
      "floor": 4,
      "type": "Traditional"
    }
  ],
  simpson:[
    {
      "available": 15,
      "size": "Double",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 38,
      "size": "Double",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 24,
      "size": "Double",
      "floor": 3,
      "type": "Traditional"
    },
    {
      "available": 10,
      "size": "Double",
      "floor": 4,
      "type": "Traditional"
    }
  ],
  trusler:[
    {
      "available": 15,
      "size": "Double",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 18,
      "size": "Double",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 9,
      "size": "Double",
      "floor": 3,
      "type": "Traditional"
    },
    {
      "available": 11,
      "size": "Double",
      "floor": 4,
      "type": "Traditional"
    }
  ],
  hume:[
    {
      "available": 40,
      "size": "Double",
      "floor": 1,
      "type": "Suite"
    },
    {
      "available": 20,
      "size": "Double",
      "floor": 2,
      "type": "Suite"
    },
    {
      "available": 23,
      "size": "Double",
      "floor": 3,
      "type": "Suite"
    },
    {
      "available": 35,
      "size": "Double",
      "floor": 4,
      "type": "Suite"
    },
    {
      "available": 2,
      "size": "Triple",
      "floor": 1,
      "type": "Suite"
    },
    {
      "available": 1,
      "size": "Triple",
      "floor": 4,
      "type": "Suite"
    }
  ],
  infinity:[
    {
      "available": 3,
      "size": "Single",
      "floor": 1,
      "type": "Suite"
    },
    {
      "available": 1,
      "size": "Single",
      "floor": 4,
      "type": "Suite"
    },
    {
      "available": 15,
      "size": "Double",
      "floor": 1,
      "type": "Suite"
    },
    {
      "available": 12,
      "size": "Double",
      "floor": 3,
      "type": "Suite"
    },
    {
      "available": 10,
      "size": "Double",
      "floor": 4,
      "type": "Suite"
    },
    {
      "available": 4,
      "size": "Double",
      "floor": 2,
      "type": "Super Suite"
    },
    {
      "available": 1,
      "size": "Double",
      "floor": 3,
      "type": "Super Suite"
    },
    {
      "available": 2,
      "size": "Double",
      "floor": 4,
      "type": "Super Suite"
    }
  ],
  jennings:[
    {
      "available": 10,
      "size": "Double",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 13,
      "size": "Double",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 7,
      "size": "Double",
      "floor": 3,
      "type": "Traditional"
    },
    {
      "available": 2,
      "size": "Triple",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 1,
      "size": "Triple",
      "floor": 3,
      "type": "Traditional"
    }
  ],
  keys:[
    {
      "available": 15,
      "size": "Four Bedroom",
      "floor": 1,
      "type": "Apartment"
    },
    {
      "available": 15,
      "size": "Four Bedroom",
      "floor": 2,
      "type": "Apartment"
    }
  ],
  lakeside:[
    {
      "available": 21,
      "size": "Single",
      "floor": 1,
      "type": "Apartment"
    },
    {
      "available": 50,
      "size": "Single",
      "floor": 2,
      "type": "Apartment"
    },
    {
      "available": 33,
      "size": "Single",
      "floor": 3,
      "type": "Apartment"
    }
  ],
  buckman:[
    {
      "available": 4,
      "size": "Single",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 1,
      "size": "Single",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 2,
      "size": "Single",
      "floor": 3,
      "type": "Traditional"
    },
    {
      "available": 10,
      "size": "Double",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 12,
      "size": "Double",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 14,
      "size": "Double",
      "floor": 3,
      "type": "Traditional"
    },
    {
      "available": 3,
      "size": "Triple",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 1,
      "size": "Triple",
      "floor": 3,
      "type": "Traditional"
    }
  ],
  fletcher:[
    {
      "available": 1,
      "size": "Single",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 5,
      "size": "Double",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 10,
      "size": "Double",
      "floor": 3,
      "type": "Traditional"
    },
    {
      "available": 1,
      "size": "Two Room Double",
      "floor": 3,
      "type": "Traditional"
    },
    {
      "available": 1,
      "size": "Triple",
      "floor": 3,
      "type": "Traditional"
    }
  ],
  murphree:[
    {
      "available": 6,
      "size": "Double",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 6,
      "size": "Double",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 7,
      "size": "Double",
      "floor": 3,
      "type": "Traditional"
    },
    {
      "available": 2,
      "size": "Triple",
      "floor": 3,
      "type": "Traditional"
    },
    {
      "available": 1,
      "size": "Triple",
      "floor": 4,
      "type": "Traditional"
    }
  ],
  sledd:[
    {
      "available": 5,
      "size": "Double",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 5,
      "size": "Double",
      "floor": 3,
      "type": "Traditional"
    },
    {
      "available": 1,
      "size": "Two Room Double",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 2,
      "size": "Triple",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 1,
      "size": "Three Room Quad",
      "floor": 2,
      "type": "Traditional"
    }
  ],
  thomas:[
    {
      "available": 5,
      "size": "Double",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 3,
      "size": "Double",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 5,
      "size": "Double",
      "floor": 3,
      "type": "Traditional"
    },
    {
      "available": 2,
      "size": "Triple",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 1,
      "size": "Quad",
      "floor": 3,
      "type": "Traditional"
    }
  ],
  springs:[
    {
      "available": 2,
      "size": "Single",
      "floor": 1,
      "type": "Suite"
    },
    {
      "available": 5,
      "size": "Single",
      "floor": 3,
      "type": "Suite"
    },
    {
      "available": 12,
      "size": "Double",
      "floor": 2,
      "type": "Suite"
    },
    {
      "available": 9,
      "size": "Double",
      "floor": 3,
      "type": "Suite"
    },
    {
      "available": 7,
      "size": "Double",
      "floor": 4,
      "type": "Suite"
    }
  ],
  east:[
    {
      "available": 10,
      "size": "Double",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 15,
      "size": "Double",
      "floor": 4,
      "type": "Traditional"
    },
    {
      "available": 6,
      "size": "Double",
      "floor": 5,
      "type": "Traditional"
    },
    {
      "available": 3,
      "size": "Triple",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 2,
      "size": "Triple",
      "floor": 2,
      "type": "Traditional"
    }
  ],
  north:[
    {
      "available": 1,
      "size": "Single",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 6,
      "size": "Double",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 8,
      "size": "Double",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 8,
      "size": "Double",
      "floor": 4,
      "type": "Traditional"
    },
    {
      "available": 2,
      "size": "Triple",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 1,
      "size": "Triple",
      "floor": 3,
      "type": "Traditional"
    }
  ],
  riker:[
    {
      "available": 1,
      "size": "Single",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 10,
      "size": "Double",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 12,
      "size": "Double",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 5,
      "size": "Double",
      "floor": 3,
      "type": "Traditional"
    }
  ],
  tolbert:[
    {
      "available": 1,
      "size": "Single",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 11,
      "size": "Double",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 8,
      "size": "Double",
      "floor": 4,
      "type": "Traditional"
    },
    {
      "available": 2,
      "size": "Triple",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 1,
      "size": "Triple",
      "floor": 4,
      "type": "Traditional"
    }
  ],
  weaver:[
    {
      "available": 1,
      "size": "Single",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 5,
      "size": "Double",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 4,
      "size": "Double",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 2,
      "size": "Double",
      "floor": 4,
      "type": "Traditional"
    },
    {
      "available": 1,
      "size": "Triple",
      "floor": 4,
      "type": "Traditional"
    },
  ],
  cypress:
  [
    {
      "available": 5,
      "size": "Single",
      "floor": 1,
      "type": "Suite"
    },
    {
      "available": 8,
      "size": "Single",
      "floor": 2,
      "type": "Suite"
    },
    {
      "available": 3,
      "size": 4,
      "floor": 1,
      "type": "Suite"
    },
    {
      "available": 20,
      "size": "Double",
      "floor": 1,
      "type": "Suite"
    },
    {
      "available": 16,
      "size": "Double",
      "floor": 2,
      "type": "Suite"
    },
    {
      "available": 13,
      "size": "Double",
      "floor": 3,
      "type": "Suite"
    },
    {
      "available": 2,
      "size": "Double",
      "floor": 2,
      "type": "Super Suite"
    },
    {
      "available": 1,
      "size": "Double",
      "floor": 3,
      "type": "Super Suite"
    },
  ],
  mallory:[
    {
      "available": 2,
      "size": "Single",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 1,
      "size": "Triple",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 6,
      "size": "Double",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 5,
      "size": "Double",
      "floor": 3,
      "type": "Traditional"
    },
    {
      "available": 5,
      "size": "Double",
      "floor": 4,
      "type": "Traditional"
    }
  ],
  reid:[
    {
      "available": 3,
      "size": "Single",
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 1,
      "size": "Single",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 7,
      "size": "Double",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 6,
      "size": "Double",
      "floor": 3,
      "type": "Traditional"
    },
    {
      "available": 2,
      "size": "Triple",
      "floor": 5,
      "type": "Traditional"
    }
  ],
  yulee:[
    {
      "available": 12,
      "size": "Double",
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 18,
      "size": "Double",
      "floor": 3,
      "type": "Traditional"
    },
    {
      "available": 2,
      "size": "Triple",
      "floor": 4,
      "type": "Traditional"
    }
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
  if(roomNumbers[val]){
    //actually run the rebuild
    $('#room').empty();
    let output =  roomNumbers[val].map((element)=>{
        return `<tr>
                    <td>${element.size}</td>
                    <td>${element.type}</td>
                    <td>${element.floor}</td>
                    <td>${element.available}</td>
                  </tr>`;
    });
    $('#room').append(output);

  }else{
    //just empty it
    $('#room').empty();
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
