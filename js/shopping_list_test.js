class ShoppingListItem{
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.is_done = false;
  }

  check() {
    this.is_done = true;
  }

  uncheck() {
    this.is_done;
  }

  render() {

  }
}


class ShoppingList{
  constructor(){
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

}