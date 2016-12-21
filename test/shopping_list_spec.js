const expect =  chai.expect;
chai.should();

describe('ShoppingListItem',  () => {
  let myShoppingListItem;

  beforeEach(() => {
    myShoppingListItem = new ShoppingListItem('nike', 'running shoes');
  });

  it('should be a class',  () => {
      ShoppingListItem.should.be.a('function');
  });

  it('should have name property', () => {
    expect(myShoppingListItem).to.have.property('name');

  });

  it('should have description property', () => {
    expect(myShoppingListItem).to.have.property('description');

  });

  it('should have is_done property', () => {
    expect(myShoppingListItem).to.have.property('is_done');

  });

  it('should have a constructor that takes two arguments', () => {
    // let otherShoppingListItem = new ShoppingListItem('iphone', 'smart phone');
    // expect(otherShoppingListItem.name).to.be('iphone');
    // expect(otherShoppingListItem.description).to.be('smart phone');
  });

  it('should have new instances of name & description', () => {
    myShoppingListItem.name.should.be.equal('nike');
    myShoppingListItem.description.should.be.equal('running shoes');
  });

  describe('methods', function () {
    it('should have a method named `check`', () => {
      myShoppingListItem.check.should.be.a('function');
    });

    it('should set `is_done` property to `true` when invoked', () => {
      myShoppingListItem.check();
      myShoppingListItem.is_done.should.equal(true);
    });

    it('should have a method named `uncheck`', () => {
      myShoppingListItem.uncheck.should.be.a('function');
    });

    it('should set `is_done` property to `false` when invoked', () => {
      myShoppingListItem.uncheck();
      myShoppingListItem.is_done.should.equal(false);
    });

     it('should have a method named `render`', () => {
      myShoppingListItem.render.should.be.a('function');
    });



  });

});


describe('ShoppingList',  () => {
  let myShoppingList;

  beforeEach(() => {
    myShoppingList = new ShoppingList('tyler');
  });

  it('should be a class',  () => {
      ShoppingList.should.be.a('function');
  });

  it('should have items property', () => {
    expect(myShoppingList).to.have.property('items');
  });

  it('should have a constructor that initializes `items to be empty array`', () => {
    myShoppingList.items.should.deep.equal([]);

  });

  describe('methods', function () {
    it('should have a method named `addItem` that accepts singe ShoppingListItem argument', () => {
      myShoppingList.addItem.should.be.a('function');
    });
  });



});



