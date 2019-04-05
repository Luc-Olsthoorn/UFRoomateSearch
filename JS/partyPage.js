const generateParty = () =>{

	let output = ``;
    party.map((element, key)=>{

		output += `
        <td class="party-member">
                  <img class="party-pic" src="${mainData["people"][element.index].profilepic}">
                </td>`;
	
    });
    output += `<td class="member-name add-member" style="cursor: pointer;"
                  onclick="javascript:document.location.href = 'Search.html';">
                  <b>+</b> Add members </td>`;
    $('#currentParty').empty();
    $('#currentParty').append(output);
}
generateParty();