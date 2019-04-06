const generateParty = () =>{

    let output = `
        <td class="party-member">
                  <img class="party-pic" src="${me.profilepic}">
                  <p> ${me.name}</p>
                </td>`;
    party.map((element, key)=>{

		output += `
        <td class="party-member">
                  <img class="party-pic" src="${mainData["people"][element].profilepic}">
                  <p> ${mainData["people"][element].name}</p>
                </td>`;
	
    });
    output += `<td class="member-name add-member" style="cursor: pointer;"
                  onclick="javascript:document.location.href = 'Search.html';">
                  <b>+</b> Add members </td>`;
    $('#currentParty').empty();
    $('#currentParty').append(output);
}
generateParty();