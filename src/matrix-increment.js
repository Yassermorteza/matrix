module.exports = function matrixIncrement(data){

  var newmatrixx = [];
  var counter = 0;
  data.forEach(function(increment, index){
    newmatrixx[index]=[];
    for(var i=0; i < data[index].length; i++){
      counter++;
      newmatrixx[index].push(counter);
    }
  })
  return newmatrixx;
}