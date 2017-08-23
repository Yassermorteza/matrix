module.exports = function createMatrix(rowsCount, columnsCount){
 var matrix =[];

 for(var i=0; i<rowsCount; i++ ){
    matrix[i]=[];
    for(var x=0; x<columnsCount; x++){
     matrix[i].push(0);
    }
  }
return matrix;
}
