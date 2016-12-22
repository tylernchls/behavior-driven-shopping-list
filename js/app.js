var myList = new ShoppingList();


function add_to_shopping_list(){
  var title = document.getElementById('title').value;
  var description = document.getElementById('description').value;
  var new_shopping_list_item = new ShoppingListItem(title,description);
  myList.addItem(new_shopping_list_item);
  document.getElementById('content').innerHTML = myList.render();
}

// function itemDeleteBtnClick(itemIdx)

function changeCheckedStatus(idx, checkbox) {

   if(checkbox.checked) {
    myList.getItemById(idx).check();
    console.log(myList.getItemById(idx));
   } else {
    myList.getItemById(idx).uncheck();
    console.log(myList.getItemById(idx));
   }
}

function removeItemButtonClicked(idx){
  myList.removeItem(myList.getItemById(idx));
  document.getElementById('content').innerHTML = myList.render();
  console.log(myList);


}