function newItem(){
  // jQuery Code
  //1. Adding a new item to the list:
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
      alert("You must write something!");
  } else {
      $('#list').append(li);
  }

  // 2. Crossing an item out:
  function crossOut() {
      li.toggleClass("strike");
  }

  li.on("dblclick", crossOut);

  // 3(i). Adding the delete button "X":
  let crossOutButton = $("<crossOutButton></CcrossOutButton>");
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);

  // 3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  function deleteListItem() {
      li.addClass("delete")
  }

  // 4. Reordering the items:
  $('#list').sortable();
}
