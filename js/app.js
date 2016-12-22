var myList = new ShoppingList();


function add_to_shopping_list(){
  var title = document.getElementById('title').value;
  var description = document.getElementById('description').value;
  var new_shopping_list_item = new ShoppingListItem(title,description);
  myList.addItem(new_shopping_list_item);
  document.getElementById('content').innerHTML = myList.render();

  console.log(myList.render());
}

