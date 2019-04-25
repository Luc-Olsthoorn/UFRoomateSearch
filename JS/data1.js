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
		},

		{
			name: "John Smith",
			title: "Incoming Freshman",
			major: "Computer Science",
			hometown: "White Plains, NY",
			hobbies: ["Programming", "Video Games", "Rowing"],
			bed: "Goes to bed between 12 - 1 AM",
			partylevel: "Doesn't like to party",
			work: "Serious about school and getting work done",
			profilepic: "IMG/users/boy1.jpg",
			match: 79,
			party: []
		},

		{
			name: "Dylan Dinklage",
			title: "Incoming Freshman",
			major: "Computer Science",
			hometown: "White Plains, NY",
			hobbies: ["Programming", "Video Games", "Rowing"],
			bed: "Goes to bed between 12 - 1 AM",
			partylevel: "Doesn't like to party",
			work: "Serious about school and getting work done",
			profilepic: "IMG/users/boy2.jpg",
			match: 79,
			party: []
		},

		{
			name: "Drew Woods",
			title: "Incoming Freshman",
			major: "Computer Science",
			hometown: "White Plains, NY",
			hobbies: ["Programming", "Video Games", "Rowing"],
			bed: "Goes to bed between 12 - 1 AM",
			partylevel: "Doesn't like to party",
			work: "Serious about school and getting work done",
			profilepic: "IMG/users/boy3.jpg",
			match: 79,
			party: []
		}

	]

}


let party = getStoredData().party || [];
