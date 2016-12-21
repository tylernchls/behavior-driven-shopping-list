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
    let otherShoppingListItem = new ShoppingListItem('iphone', 'smart phone');
    expect(otherShoppingListItem.name).to.equal('iphone');
    expect(otherShoppingListItem.description).to.equal('smart phone');
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

     it('should return an html formatted string', () => {
      myShoppingListItem.render().should.equal(`<li class="completed_false"><span>nike</span> <span>running shoes</span></li>`);

     });

     it('should return an html formatted string', () => {
      myShoppingListItem.check();
      myShoppingListItem.render().should.equal(`<li class="completed_true"><span>nike</span> <span>running shoes</span></li>`);

     });
  });




});


describe('ShoppingList',  () => {
  let myShoppingList;

  beforeEach(() => {
    myShoppingList = new ShoppingList();
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

    it('should invoke `addItem()` and pass that item into `items array`', () => {
      var banana = new ShoppingListItem('banana', 'fruit');
      myShoppingList.addItem(banana);
      myShoppingList.items.should.contain(banana);

    });

    it('should only accept items that are instanceOf ShoppingListItem', () => {
      var banana = new ShoppingListItem('banana', 'fruit');
      myShoppingList.addItem(banana);
      expect(banana instanceof ShoppingListItem).to.be.true;

    });

    it('should have a method `removeItem` that accepts a single ShoppingListItem argument', () => {
      myShoppingList.removeItem.should.be.a('function');


    });

    it('should remove item that already exists in the items array', () => {


    });
  });



});



