module.exports = function matrixFillRowNum (data){

  var matrixx=[];

  data.forEach(function(rows, index){
    matrixx[index]= [];
    for(var i=0; i<data[index].length; i++){
      matrixx[index].push(index);
    }
  })
  return matrixx;
}
