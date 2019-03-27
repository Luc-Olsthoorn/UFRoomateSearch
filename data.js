let mainData = {
	"people":[
		{
			name: "George",
			match: "100%"
		},
		{
			name: "Kent",
			match: "69%"
		}
	]

}

let generateSearchResults = ()=>{
	let output = mainData["people"].map((element)=>{
		return `<div>Name: ${element.name} Match: ${element.match}<div>`
	});
	$("#searchResults").append(output); 
}

generateSearchResults();