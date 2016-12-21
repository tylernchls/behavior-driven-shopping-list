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




});




