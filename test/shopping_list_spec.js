const expect =  chai.expect;
chai.should();

describe('ShoppingListItem', function () {
  it('should be a class', function () {
    ShoppingListItem.should.be.a('function');
  });
});