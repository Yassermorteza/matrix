var expect = require('expect.js');
var createMatrix = require('./../src/create-matrix');
var matrixIncrement = require('./../src/matrix-increment');

describe('test matrixIncrement', function(){
  var matrix=createMatrix(2, 2)
  it('has to be a function', function(){
     expect(matrixIncrement).to.be.a('function');
  })
  it('produces an array', function(){
    var result = matrixIncrement(matrix);
    expect(result).to.be.an('array');
  })
});