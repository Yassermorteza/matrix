var expect = require('expect.js');
var createMatrix = require('./../src/create-matrix');
var matrixFillSequence = require('./../src/matrix-fill-sequence');

describe('matrixFillSequence', function(){
  it('Should be a function', function(){
    expect(matrixFillSequence).to.be.a('function');
  })
});