const expect =  chai.expect;
chai.should();

describe('ShoppingListItem',  () => {
  let myShoppingListItem;

  beforeEach(() => {
    myShoppingListItem = new ShoppingListItem('tyler');
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


});




