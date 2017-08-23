module.exports = function matrixFillsequence(data){

    var newmatrixx= [];
    var counter = 0;
    for(var rownum=0; rownum < data.length ; rownum++){

      newmatrixx[rownum] = [];
      var columnscount= data[rownum].length;

      for(var i=0 ; i < columnscount ; i++){
        newmatrixx[rownum].push(counter);
        counter++;
      }
    }
    return newmatrixx;
}