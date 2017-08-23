var expect = require('expect.js');
var createMatrix = require('./../src/create-matrix');

describe('test createMatrix', function(){
   it('Should be a function', function(){
     expect(createMatrix).to.be.a('function');
   })

   it('produces multi dimensional array', function(){
    var result = createMatrix(2,3);
    expect(result).to.be.an('array');
    expect(result[0]).to.be.an('array');
   })

   it('produces array with the given parameters', function(){
    var result = createMatrix(2,6);
    expect(result.length).to.be(2);
    expect(result[0].length).to.be(6);
   })
});

