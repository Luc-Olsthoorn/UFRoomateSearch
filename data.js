//"me" represents whatever user is logged in
console.log(sessionStorage.getItem('personal'));

let me = {
			name: "George Foreman",
			title: "Incoming Freshman",
			major: "Computer Engineering",
			hometown: "Key West, FL",
			hobbies: ["Programming", "Video Games", "Swimming"],
			bed: "Goes to bed between 12 - 1 AM",
			party: "Likes to party occasionally",
			work: "Serious about school and getting work done",
			profilepic: "IMG/users/George.png",
			match: 79,
			party:[] 
		};
const addToParty = (index) =>{
	let alreadyThere = false;
	party.forEach((element)=>{
		if(element.index == index){
			alreadyThere = true;
		}
	})
	if (!alreadyThere){
		party.push({index:index});
		generateParty();
		storeData({party:party})
	}

}

const getStoredData = () =>{
	if(sessionStorage.data){
		return JSON.parse(sessionStorage.data);
	}else{
		return {};
	}
	
}
const storeData = (data) =>{
	sessionStorage.setItem('data', JSON.stringify(data));
}
//mainData represents pool of roommates to be searched from
let mainData = {
	"people":[
		{
			name: "Andrew Kuczynski",
			title: "Incoming Freshman",
			major: "Computer Engineering",
			hometown: "Coral Springs, FL",
			hobbies: ["Hockey", "Video Games"],
			bed: "Goes to bed between 12 - 1 AM",
			partylevel: "Likes to party occasionally",
			work: "Serious about school and getting work done",
			profilepic: "IMG/users/Andrew.png",
			match: 93,
			party: [ {
									profilepic: "IMG/users/Kent.png",
									match: 88
							 },
							 {
 									profilepic: "IMG/users/Albert.png",
 									match: 88
				 			} ]

		},

		{
			name: "Dave Small",
			title: "Incoming Freshman",
			major: "Computer Science",
			hometown: "Orlando, FL",
			hobbies: ["Programming", "Video Games", "Travelling"],
			bed: "Goes to bed between 8 - 10 PM",
			partylevel: "Likes to party occasionally",
			work: "Serious about school and getting work done",
			profilepic: "IMG/users/Dave.png",
			match: 87,
			party: []
		},

		{
			name: "Mark Zuckerberg",
			title: "Incoming Freshman",
			major: "Computer Science",
			hometown: "White Plains, NY",
			hobbies: ["Programming", "Video Games", "Rowing"],
			bed: "Goes to bed between 12 - 1 AM",
			partylevel: "Doesn't like to party",
			work: "Serious about school and getting work done",
			profilepic: "IMG/users/Mark.png",
			match: 79,
			party: []
		}



	]

}
const generateParty = () =>{
	let output = `<ul id="nav-mobile" class="right hide-on-med-and-down" style="margin-right: 20px;">
                  <li>Current Party</li>`;
    party.map((element, key)=>{
		output += `<li> <img src="${mainData["people"][element.index].profilepic}" height="50" alt="" style="margin-left: 20px; border-radius: 50%;"> </li>`;
	
    });
    for(let i =0; i< 5-party.length; i++){
    	output+=`<li><span class="dashed-circle"></span></li>`;
    }
    output += ` </ul>`;
    $('#currentParty').empty();
    $('#currentParty').append(output);
}
let generateSearchResults = (callback)=>{
	let output = mainData["people"].map((element, key)=>{

		let first = 		`          <div class="roommate-panel">
				            <table class="roommate-table">
				              <tr>
				                <td class="name-panel" colspan="4"> ${element.name} </td>
				              </tr>
				              <tr>
				                <td style="width: 18%; text-align: center;"> <div class="profile-pic-panel">
				                  <img src="${element.profilepic}" class="img-fluid" alt="" />
				                </div> </td>
				                <td style="width: 15%; text-align: center;">
				                    <div class="party-panel">
				                      <table class="party-table" style="border: none">
				                        <tr style="border: none; height: 18%">
				                          <td style="padding-top:10%; padding-bottom:8%; text-align:center; font-size:105%; font-weight:550;">Current Party</td>
				                        </tr>
					`;

			let second = '';

			for(var i=0; i<element.party.length; i++) {
				second = second + `
				<tr style="border: none;">
					<td style="padding-top:5%; padding-bottom:5%; text-align:center; font-size: 90%;">
						<div style="font-weight: 600; width:30%; margin:0; display:inline-block;"><img src="${element.party[i].profilepic}" class="img-fluid" style="border-radius: 50%;" alt=""></div>&nbsp;&nbsp;${element.party[i].match}% Match
					</td>
				</tr>`;
			}


		let third = `
				                      </table>
				                    </div>
				                </td>
				              <!-- INFO PANEL -->
				              <td style="text-align: center;">
				                <div class="info-panel">
				                  <table class="desc-table">
				                    <tr style="border: none;">
				                      <td class="desc">
				                        ${element.title} - ${element.major} <br>
				                        ${element.hometown}
				                      </td>
				                    </tr>
				                  </table>
				                  <table class="hobby-table">
				                    <tr style="border: none;">
				                      <td class="hobby">
				                        <strong>Hobbies:</strong> ${element.hobbies.join(', ')}
				                      </td>
				                    </tr>
				                  </table>
				                  <table class="details-table">
				                    <tr style="border-bottom: 1px solid rgb(221,221,221);">
				                      <td class="detail">
				                        <i class="material-icons ${checkorx(element.bed,'bed').class}">${checkorx(element.bed,'bed').icon}</i> ${element.bed}
				                      </td>
				                    </tr>
				                    <tr style="border-bottom: 1px solid rgb(221,221,221);">
				                      <td class="detail">
				                        <i class="material-icons ${checkorx(element.party,'party').class}">${checkorx(element.partylevel,'partylevel').icon}</i> ${element.partylevel}
				                      </td>
				                    </tr>
				                    <tr style="border-bottom: 1px solid rgb(221,221,221);">
				                      <td class="detail">
				                        <i class="material-icons ${checkorx(element.work,'work').class}">${checkorx(element.work,'work').icon}</i> ${element.work}
				                      </td>
				                    </tr>
				                  </table>
				                </div>
				              </td>
				              <!-- MATCH PANEL -->
				              <td style="width: 22%; text-align: center;">
				                <div class="match-panel">
				                  <div style="">
				                    <span class="percentage match">${element.match}</span><span class="percentsign match">%</span>
				                  </div>
				                  <div style="font-weight: 500; font-size: 1em; margin-bottom: 0.25em; margin-top: -0.25em">MATCH</div>
				                  <a class="waves-effect waves-light btn-small mybutton"><i class="material-icons left mybuttonicon">local_phone</i>REQ CONTACT</a>
				                  <a class="waves-effect waves-light btn-small mybutton" onclick="addToParty(${key})"><i class="material-icons left mybuttonicon">group</i>INV TO PARTY</a>
				                </div>
				              </td>
				              </tr>
				            </table>
				          </div>`;

			return first+second+third;
	});
	$("#searchResults").append(output);
	callback();
}

var updateHeights = function () {
	console.log($(".profile-pic-panel").height());
	$(".party-panel").css({'height':($(".profile-pic-panel").height()+20+'px')});
	$(".match-panel").css({'height':($(".profile-pic-panel").height()+20+'px')});
	$(".info-panel").css({'height':($(".profile-pic-panel").height()+20+'px')});
};

var checkorx = function(input, index) {
	var result = {};

	if(input == me[index]) {
			result.class = 'checkmark';
			result.icon = 'check';
	}
	else {
			result.class = 'xmark';
			result.icon = 'close';
	}
	return result;

};
let party = getStoredData().party || [];
generateParty();
generateSearchResults(updateHeights);
