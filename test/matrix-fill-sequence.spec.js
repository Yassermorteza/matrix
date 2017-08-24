var expect = require('expect.js');
var createMatrix = require('./../src/create-matrix');
var matrixFillSequence = require('./../src/matrix-fill-sequence');

describe('matrixFillSequence', function(){
  var matrix = createMatrix(2,8);
  it('Should be a function', function(){
    expect(matrixFillSequence).to.be.a('function');
  })

  it('has to produce an array', function (){
    var result = matrixFillSequence(matrix);
    expect(result).to.be.an('array');
    expect(result[0].length).to.be(8);
    expect(result[0].indexOf(6)).to.not.be(-1);
    for(i=0; i< result[0].length; i++){
      expect(result[0][i]).to.not.be('string');
    }
  })
});