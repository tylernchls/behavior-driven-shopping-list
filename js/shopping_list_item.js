let uniqueID = 0;

class ShoppingListItem{
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.is_done =  false;
    this._idx = "ShoppingListItem_" + uniqueID++;
  }

  check() {
    this.is_done = true;
  }

  uncheck() {
    this.is_done = false;
  }

  render() {
    // var li = documenent.createElement('li');
    // //add span
    // // add another span
    // // add content
    // var deleteBtn = documenent.createElement('button');
    // deleteBtn.innerHTML = '&times';
    // deleteBtn.addEventListener('click', () => {
    //   console.log('delete this ShoppingListItem');
    // })
    // li.appendChild(deleteBtn);

    // // add deleteBtn to li


    return `<li class="completed_${this.is_done}" id="${this._idx}"><span>${this.name}</span> <span>${this.description}</span><input type="checkbox" onchange="changeCheckedStatus('${this._idx}', this)"></li>`;
  }
}