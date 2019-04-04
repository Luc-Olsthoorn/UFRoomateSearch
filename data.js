let mainData = {
	"people":[
		{
			name: "Andrew Kuczynski",
			title: "Incoming Freshman",
			major: "Computer Engineering",
			hometown: "Coral Springs, FL",
			hobbies: ["Hockey", "Video Games"],
			bed: "Goes to bed between 12 - 1 AM",
			party: "Likes to party occasionally",
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
			party: "Likes to party occasionally",
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
			party: "Doesn't like to party",
			work: "Serious about school and getting work done",
			profilepic: "IMG/users/Mark.png",
			match: 79,
			party: []
		}



	]

}

let generateSearchResults = ()=>{
	let output = mainData["people"].map((element)=>{
		return `
		<div class="roommate">
		<img src="${element.profilepic}" />
			Name: ${element.name} <br> Match: ${element.match}




		</div>
		`
	});
	$("#searchResults").append(output);
}

generateSearchResults();
