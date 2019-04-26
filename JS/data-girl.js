//"me" represents whatever user is logged in


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
		party.push(index);
		generateParty();
		storeData({party:party})
	}

}

const getStoredData = () =>{
	if(sessionStorage.data){
		console.log(sessionStorage);
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
			name: "Anne Anderson",
			title: "Incoming Freshman",
			major: "Computer Science",
			hometown: "White Plains, NY",
			hobbies: ["Programming", "Video Games", "Rowing"],
			bed: "Goes to bed between 12 - 1 AM",
			partylevel: "Doesn't like to party",
			work: "Serious about school and getting work done",
			profilepic: "IMG/users/girl1.jpg",
			match: 94,
			party: [ {
									profilepic: "IMG/users/girl3.jpg",
									match: 82
							 },
							 {
 									profilepic: "IMG/users/girl5.jpg",
 									match: 73
				 			} ]
		},

		{
			name: "Bridgett Barnes",
			title: "Incoming Freshman",
			major: "Computer Science",
			hometown: "White Plains, NY",
			hobbies: ["Programming", "Video Games", "Rowing"],
			bed: "Goes to bed between 12 - 1 AM",
			partylevel: "Doesn't like to party",
			work: "Serious about school and getting work done",
			profilepic: "IMG/users/girl2.jpg",
			match: 87,
			party: []
		},

		{
			name: "Caroline Cooper",
			title: "Incoming Freshman",
			major: "Computer Science",
			hometown: "White Plains, NY",
			hobbies: ["Programming", "Video Games", "Rowing"],
			bed: "Goes to bed between 12 - 1 AM",
			partylevel: "Doesn't like to party",
			work: "Serious about school and getting work done",
			profilepic: "IMG/users/girl3.jpg",
			match: 82,
			party: [ {
									profilepic: "IMG/users/girl1.jpg",
									match: 94
							 },
							 {
 									profilepic: "IMG/users/girl5.jpg",
 									match: 73
				 			} ]
		},

		{
			name: "Daniella Dankerson",
			title: "Incoming Freshman",
			major: "Computer Science",
			hometown: "White Plains, NY",
			hobbies: ["Programming", "Video Games", "Rowing"],
			bed: "Goes to bed between 12 - 1 AM",
			partylevel: "Doesn't like to party",
			work: "Serious about school and getting work done",
			profilepic: "IMG/users/girl4.jpg",
			match: 76,
			party: []
		},

		{
			name: "Erin Engelbert",
			title: "Incoming Freshman",
			major: "Computer Science",
			hometown: "White Plains, NY",
			hobbies: ["Programming", "Video Games", "Rowing"],
			bed: "Goes to bed between 12 - 1 AM",
			partylevel: "Doesn't like to party",
			work: "Serious about school and getting work done",
			profilepic: "IMG/users/girl5.jpg",
			match: 73,
			party: [ {
									profilepic: "IMG/users/girl1.jpg",
									match: 94
							 },
							 {
 									profilepic: "IMG/users/girl3.jpg",
 									match: 73
				 			} ]
		},

		{
			name: "Gianna the Great Jr",
			title: "Incoming Freshman",
			major: "Computer Science",
			hometown: "White Plains, NY",
			hobbies: ["Programming", "Video Games", "Rowing"],
			bed: "Goes to bed between 12 - 1 AM",
			partylevel: "Doesn't like to party",
			work: "Serious about school and getting work done",
			profilepic: "IMG/users/girl6.jpg",
			match: 64,
			party: []
		}



	]

}


let party = getStoredData().party || [];
