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
      "available": 40,
      "size": 4,
      "floor": 3,
      "type": "Apartment"
    },
    {
      "available": 40,
      "size": 1,
      "floor": 3,
      "type": "Traditional"
    },
    {
      "available": 28,
      "size": 5,
      "floor": 0,
      "type": "Suite"
    }
  ],
  broward:[
    {
      "available": 26,
      "size": 1,
      "floor": 3,
      "type": "Apartment"
    },
    {
      "available": 34,
      "size": 5,
      "floor": 4,
      "type": "Traditional"
    },
    {
      "available": 36,
      "size": 3,
      "floor": 5,
      "type": "Suite"
    }
  ],
  rawlings:[
    {
      "available": 37,
      "size": 3,
      "floor": 0,
      "type": "Apartment"
    },
    {
      "available": 30,
      "size": 3,
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 22,
      "size": 2,
      "floor": 4,
      "type": "Suite"
    }
  ],
  graham:[
    {
      "available": 33,
      "size": 1,
      "floor": 0,
      "type": "Apartment"
    },
    {
      "available": 21,
      "size": 3,
      "floor": 7,
      "type": "Traditional"
    },
    {
      "available": 23,
      "size": 1,
      "floor": 2,
      "type": "Suite"
    }
  ],
  simpson:[
    {
      "available": 33,
      "size": 1,
      "floor": 0,
      "type": "Apartment"
    },
    {
      "available": 21,
      "size": 3,
      "floor": 7,
      "type": "Traditional"
    },
    {
      "available": 23,
      "size": 1,
      "floor": 2,
      "type": "Suite"
    }
  ],
  trusler:[
    {
      "available": 26,
      "size": 2,
      "floor": 4,
      "type": "Apartment"
    },
    {
      "available": 38,
      "size": 3,
      "floor": 5,
      "type": "Traditional"
    },
    {
      "available": 24,
      "size": 5,
      "floor": 5,
      "type": "Suite"
    }
  ],
  hume:[
    {
      "available": 29,
      "size": 3,
      "floor": 1,
      "type": "Apartment"
    },
    {
      "available": 34,
      "size": 2,
      "floor": 6,
      "type": "Traditional"
    },
    {
      "available": 35,
      "size": 1,
      "floor": 5,
      "type": "Suite"
    }
  ],
  infinity:[
    {
      "available": 40,
      "size": 2,
      "floor": 1,
      "type": "Apartment"
    },
    {
      "available": 28,
      "size": 5,
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 30,
      "size": 2,
      "floor": 5,
      "type": "Suite"
    }
  ],
  jennings:[
    {
      "available": 20,
      "size": 2,
      "floor": 2,
      "type": "Apartment"
    },
    {
      "available": 38,
      "size": 2,
      "floor": 3,
      "type": "Traditional"
    },
    {
      "available": 40,
      "size": 3,
      "floor": 1,
      "type": "Suite"
    }
  ],
  keys:[
    {
      "available": 31,
      "size": 2,
      "floor": 6,
      "type": "Apartment"
    },
    {
      "available": 22,
      "size": 5,
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 24,
      "size": 4,
      "floor": 1,
      "type": "Suite"
    }
  ],
  lakeside:[
    {
      "available": 21,
      "size": 2,
      "floor": 5,
      "type": "Apartment"
    },
    {
      "available": 26,
      "size": 3,
      "floor": 6,
      "type": "Traditional"
    },
    {
      "available": 33,
      "size": 1,
      "floor": 0,
      "type": "Suite"
    }
  ],
  buckman:[
    {
      "available": 39,
      "size": 4,
      "floor": 2,
      "type": "Apartment"
    },
    {
      "available": 25,
      "size": 3,
      "floor": 2,
      "type": "Traditional"
    },
    {
      "available": 39,
      "size": 5,
      "floor": 6,
      "type": "Suite"
    }
  ],
  fletcher:[
    {
      "available": 34,
      "size": 4,
      "floor": 1,
      "type": "Apartment"
    },
    {
      "available": 24,
      "size": 3,
      "floor": 6,
      "type": "Traditional"
    },
    {
      "available": 30,
      "size": 3,
      "floor": 3,
      "type": "Suite"
    }
  ],
  murphree:[
    {
      "available": 36,
      "size": 4,
      "floor": 0,
      "type": "Apartment"
    },
    {
      "available": 23,
      "size": 1,
      "floor": 7,
      "type": "Traditional"
    },
    {
      "available": 37,
      "size": 3,
      "floor": 1,
      "type": "Suite"
    }
  ],
  sledd:[
    {
      "available": 33,
      "size": 3,
      "floor": 5,
      "type": "Apartment"
    },
    {
      "available": 28,
      "size": 3,
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 40,
      "size": 3,
      "floor": 3,
      "type": "Suite"
    }
  ],
  thomas:[
    {
      "available": 24,
      "size": 3,
      "floor": 5,
      "type": "Apartment"
    },
    {
      "available": 37,
      "size": 3,
      "floor": 6,
      "type": "Traditional"
    },
    {
      "available": 38,
      "size": 4,
      "floor": 1,
      "type": "Suite"
    }
  ],
  springs:[
    {
      "available": 21,
      "size": 5,
      "floor": 5,
      "type": "Apartment"
    },
    {
      "available": 40,
      "size": 1,
      "floor": 6,
      "type": "Traditional"
    },
    {
      "available": 37,
      "size": 1,
      "floor": 5,
      "type": "Suite"
    }
  ],
  east:[
    {
      "available": 38,
      "size": 5,
      "floor": 6,
      "type": "Apartment"
    },
    {
      "available": 28,
      "size": 4,
      "floor": 7,
      "type": "Traditional"
    },
    {
      "available": 28,
      "size": 1,
      "floor": 7,
      "type": "Suite"
    }
  ],
  north:[
    {
      "available": 38,
      "size": 5,
      "floor": 6,
      "type": "Apartment"
    },
    {
      "available": 28,
      "size": 4,
      "floor": 7,
      "type": "Traditional"
    },
    {
      "available": 28,
      "size": 1,
      "floor": 7,
      "type": "Suite"
    }
  ],
  riker:[
    {
      "available": 38,
      "size": 1,
      "floor": 4,
      "type": "Apartment"
    },
    {
      "available": 39,
      "size": 1,
      "floor": 0,
      "type": "Traditional"
    },
    {
      "available": 38,
      "size": 1,
      "floor": 2,
      "type": "Suite"
    }
  ],
  tolbert:[
    {
      "available": 31,
      "size": 5,
      "floor": 6,
      "type": "Apartment"
    },
    {
      "available": 11,
      "size": 1,
      "floor": 7,
      "type": "Traditional"
    },
    {
      "available": 40,
      "size": 1,
      "floor": 0,
      "type": "Suite"
    }
  ],
  weaver:[
    {
      "available": 7,
      "size": 5,
      "floor": 1,
      "type": "Apartment"
    },
    {
      "available": 1,
      "size": 1,
      "floor": 4,
      "type": "Traditional"
    },
    {
      "available": 13,
      "size": 1,
      "floor": 0,
      "type": "Suite"
    }
  ],
  cypress:
  [
    {
      "available": 34,
      "size": 2,
      "floor": 7,
      "type": "Apartment"
    },
    {
      "available": 9,
      "size": 3,
      "floor": 5,
      "type": "Traditional"
    },
    {
      "available": 4,
      "size": 4,
      "floor": 1,
      "type": "Suite"
    }
  ],
  mallory:[
    {
      "available": 8,
      "size": 5,
      "floor": 3,
      "type": "Apartment"
    },
    {
      "available": 10,
      "size": 3,
      "floor": 7,
      "type": "Traditional"
    },
    {
      "available": 5,
      "size": 5,
      "floor": 0,
      "type": "Suite"
    }
  ],
  reid:[
    {
      "available": 17,
      "size": 5,
      "floor": 7,
      "type": "Apartment"
    },
    {
      "available": 15,
      "size": 5,
      "floor": 3,
      "type": "Traditional"
    },
    {
      "available": 38,
      "size": 3,
      "floor": 3,
      "type": "Suite"
    }
  ],
  yulee:[
    {
      "available": 9,
      "size": 3,
      "floor": 7,
      "type": "Apartment"
    },
    {
      "available": 21,
      "size": 2,
      "floor": 1,
      "type": "Traditional"
    },
    {
      "available": 14,
      "size": 1,
      "floor": 0,
      "type": "Suite"
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
