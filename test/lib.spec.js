var expect = require('expect.js');
var library = require('./../src/lib');

describe('lib', function(){

  it('has to be an object', function(){
    expect(library).to.be.an('object');
  })
});