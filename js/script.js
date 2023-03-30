function newItem() {
  //create new list item
  let li = $("<li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    $("#list").append(li);
  }

  //double click crossout
  li.dblclick(() => {
    li.toggleClass("strike");
  });

  //add delete button
  let crossOutButton = $("<crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  crossOutButton.click(() => {
    li.addClass("delete");
  });
}
