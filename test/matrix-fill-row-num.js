var expect = require('expect.js');
var createMatrix = require('./../src/create-matrix');
var matrixFillRowNum = require('./../src/matrix-fill-row-num');

describe('matrixFillRowNum', function(){
  var matrix = createMatrix(4,4);
  it('should be a function', function(){
    expect(matrixFillRowNum).to.be.a('function');
  })

  it('produces multi dimensional array', function(){
    var result = matrixFillRowNum(matrix);
    expect(result).to.be.an('array');
    expect(result[0]).to.be.an('array');
    expect(result.length).to.be(4);
    expect(result[0].length).to.be(4);
    for(i=0; i<result[0].length; i++){
      expect(result[0][i]).to.be.a('number');
      expect(result[0][i]).to.not.be('string');
    }
  })
})