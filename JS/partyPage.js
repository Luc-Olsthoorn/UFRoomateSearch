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
    output += `<td class="add-member party-member" style="cursor: pointer;"
                  onclick="javascript:document.location.href = 'Search.html';">
                  <img class="party-pic" src="IMG/users/add.png">
                  <p><b>+</b> Add members</p>
                </td>`;
    $('#currentParty').empty();
    $('#currentParty').append(output);
}
generateParty();
