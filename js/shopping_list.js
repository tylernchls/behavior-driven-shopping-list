
class ShoppingList{
  constructor(){
    this.items = [];
  }

  addItem(item) {
    if(item instanceof ShoppingListItem) {
      this.items.push(item);
    } else {
      throw new Error('not available');
    }
  }

  removeItem(item) {
    if(item === undefined) {
      this.items.pop();
    } else if(item instanceof(ShoppingListItem)) {
      this.items.splice(this.items.indexOf(item), 1);
    } else {
      throw new Error('item does not exist');
    }
  }

  render() {
    var renderedItems = [];

    this.items.forEach(function(x){
      renderedItems.push(x.render());
    });
      return `<ul>` + renderedItems.join(' ') + `</ul>`;
  }
}


