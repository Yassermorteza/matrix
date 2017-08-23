var expect = require('expect.js');
var createMatrix = require('./../src/create-matrix');
var matrixFillText = require('./../src/matrix-fill-text');

describe('test matrixFillText', function(){
  var matrix = createMatrix(4,5);
  it('should be a function', function(){
    expect(matrixFillText).to.be.an('function');
  })
  it('has to produce array', function(){
    var result = matrixFillText(matrix);
    expect(result).to.be.an('array');
    expect(result[0]).to.be.an('array');
    expect(result.length).to.be(4);
    expect(result[0].length).to.be(5);
    expect(result[0].indexOf(3)).to.be(-1);
    for(i=0; i<result[0].length; i++){
    expect(result[0][i]).to.not.be('number');
    expect(result[0][i]).to.be.a('string');
    }
  })
});