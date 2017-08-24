var expect = require('expect.js');
var createMatrix = require('./../src/create-matrix');
var matrixFillColNum = require('./../src/matrix-fill-col-num');

describe('matrixFillColNum', function(){
  var matrix = createMatrix(3,6);
  it('should be a function', function(){
    expect(matrixFillColNum).to.be.a('function');
  })

  it('has to return an array', function(){
    var result = matrixFillColNum(matrix);
    expect(result).to.be.an('array');
  })
})